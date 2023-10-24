function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() {
    document.getElementById("mobile-menu").style.width = "0%";
}

document.addEventListener('DOMContentLoaded', function () {
    const daySelect = document.getElementById('day');
    const monthSelect = document.getElementById('month');
    const hourSelect = document.getElementById('hour');
    const minuteSelect = document.getElementById('minute');

    // Generar opciones para los días
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }

    // Generar opciones para los meses
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    for (let i = 0; i < months.length; i++) {
        const option = document.createElement('option');
        option.value = i + 1;
        option.textContent = months[i];
        monthSelect.appendChild(option);
    }

    // Generar opciones para las horas
    for (let i = 0; i <= 23; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i < 10 ? `0${i}` : i;
        hourSelect.appendChild(option);
    }

    // Generar opciones para los minutos
    for (let i = 0; i <= 59; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i < 10 ? `0${i}` : i;
        minuteSelect.appendChild(option);
    }

    document.querySelector('button.btn-success').addEventListener('click', function () {
        const dia = parseInt(daySelect.value);
        const mes = parseInt(monthSelect.value);
        const hora = parseInt(hourSelect.value);
        const minute = parseInt(minuteSelect.value);

        // Validar que los valores estén dentro de los rangos permitidos
        if (dia < 1 || dia > 31) {
            alert('Día inválido. Debe estar entre 1 y 31.');
            return;
        }

        if (mes < 1 || mes > 12) {
            alert('Mes inválido. Debe estar entre 1 y 12.');
            return;
        }

        if (hora < 0 || hora > 23) {
            alert('Hora inválida. Debe estar entre 0 y 23.');
            return;
        }

        if (minute < 0 || minute > 59) {
            alert('Minuto inválido. Debe estar entre 0 y 59.');
            return;
        }

        const turnoData = {
            dia_disponible: dia,
            mes_disponible: mes,
            hora_disponible: hora,
            minute_disponible: minute
        };

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(turnoData),
            redirect: 'follow'
        };

        fetch("https://estetica-backend-5ltx.onrender.com/disponer-turno/crear-turno", requestOptions)
            .then(response => response.json())
            .then(result => {
                // Si la solicitud se completó con éxito
                console.log('Turno creado con éxito:', result);
                // Mostrar modal con mensaje de éxito
                showResultModal('Turno creado con éxito');
            })
            .catch(error => {
                // Si hubo un error en la solicitud
                console.error('Error al crear el turno:', error);
                // Mostrar modal con mensaje de error
                showResultModal('Error al crear el turno. Por favor, inténtalo de nuevo.');
            });
    });

    // Función para mostrar el modal
    function showResultModal(message) {
        const modal = document.getElementById('myModal');
        const modalBody = document.getElementById('modal-body-content');
        modalBody.textContent = message;
        $('#myModal').modal('show'); // Mostrar el modal usando Bootstrap
    }

    // Obtener la tabla y su cuerpo
    const tabla = document.querySelector('.table');
    const tbody = document.getElementById('turnos-table-body');

    // Realizar la petición para obtener los turnos agendados
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };

    fetch("https://estetica-backend-5ltx.onrender.com/disponer-turno/mostrar-turnos", requestOptions)
        .then(response => response.json())
        .then(result => {
            // Limpiar cualquier fila existente en la tabla
            tbody.innerHTML = '';

            // Recorrer los turnos y agregar filas a la tabla
            result.forEach(turno => {
                const row = document.createElement('tr');

                const diaCell = document.createElement('td');
                diaCell.textContent = turno.dia_disponible;
                row.appendChild(diaCell);

                const mesCell = document.createElement('td');
                mesCell.textContent = turno.mes_disponible;
                row.appendChild(mesCell);

                const horaCell = document.createElement('td');
                horaCell.textContent = turno.hora_disponible;
                row.appendChild(horaCell);

                const minuteCell = document.createElement('td');
                minuteCell.textContent = turno.minute_disponible;
                row.appendChild(minuteCell);

                const accionesCell = document.createElement('td');
                const eliminarButton = document.createElement('button');
                eliminarButton.textContent = 'Eliminar';
                eliminarButton.classList.add( 'btt-table-ver'); // Agrega clases de Bootstrap para estilizar el botón
                eliminarButton.addEventListener('click', () => {
                    eliminarTurno(turno.id); // Llamar a la función para eliminar el turno
                });
                accionesCell.appendChild(eliminarButton);

                const actualizarButton = document.createElement('button');
                actualizarButton.textContent = 'Actualizar';
                actualizarButton.classList.add('btt-table-ver'); // Agrega clases de Bootstrap para estilizar el botón
                actualizarButton.addEventListener('click', () => {
                    // Aquí puedes agregar la lógica para actualizar el turno
                    // Puedes usar la ID o información del turno para identificarlo
                });
                accionesCell.appendChild(actualizarButton);

                row.appendChild(accionesCell);

                tbody.appendChild(row);
            });
        })
        .catch(error => console.log('error', error));
});

// Función para eliminar un turno
function eliminarTurno(id) {
    if (id) {
        const requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };

        fetch(`https://estetica-backend-5ltx.onrender.com/disponer-turno/eliminar-turno/${id}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                // Si la solicitud de eliminación se completó con éxito
                console.log('Turno eliminado con éxito:', result);
                // Puedes recargar la tabla o realizar cualquier otra acción necesaria
                loadTurnos(); // Recargar la tabla de turnos
            })
            .catch(error => {
                // Si hubo un error en la solicitud
                console.error('Error al eliminar el turno:', error);
                // Puedes mostrar un mensaje de error o realizar cualquier otra acción necesaria
            });
    }
}

// Función para cargar los turnos
function loadTurnos() {
    const tbody = document.getElementById('turnos-table-body');
    // Realizar la petición para obtener los turnos agendados
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };

    fetch("https://estetica-backend-5ltx.onrender.com/disponer-turno/mostrar-turnos", requestOptions)
        .then(response => response.json())
        .then(result => {
            // Limpiar cualquier fila existente en la tabla
            tbody.innerHTML = '';

            // Recorrer los turnos y agregar filas a la tabla
            result.forEach(turno => {
                const row = document.createElement('tr');

                const diaCell = document.createElement('td');
                diaCell.textContent = turno.dia_disponible;
                row.appendChild(diaCell);

                const mesCell = document.createElement('td');
                mesCell.textContent = turno.mes_disponible;
                row.appendChild(mesCell);

                const horaCell = document.createElement('td');
                horaCell.textContent = turno.hora_disponible;
                row.appendChild(horaCell);

                const minuteCell = document.createElement('td');
                minuteCell.textContent = turno.minute_disponible;
                row.appendChild(minuteCell);

                const accionesCell = document.createElement('td');
                const eliminarButton = document.createElement('button');
                eliminarButton.textContent = 'Eliminar';
                eliminarButton.addEventListener('click', () => {
                    eliminarTurno(turno.id); // Llamar a la función para eliminar el turno
                });
                accionesCell.appendChild(eliminarButton);

                const actualizarButton = document.createElement('button');
                actualizarButton.textContent = 'Actualizar';
                actualizarButton.addEventListener('click', () => {
                    // Aquí puedes agregar la lógica para actualizar el turno
                    // Puedes usar la ID o información del turno para identificarlo
                });
                accionesCell.appendChild(actualizarButton);

                row.appendChild(accionesCell);

                tbody.appendChild(row);
            });
        })
        .catch(error => console.log('error', error));
}

// Cargar los turnos al cargar la página
loadTurnos();


