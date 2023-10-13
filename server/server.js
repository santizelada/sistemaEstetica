const express = require("express");
const app = express();
const cors = require("cors");
// const MercadoPago = require("mercadopago");
import { MercadoPagoConfig, Payment } from 'mercadopago'

// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: 'TEST-7098395277279885-092411-6d85f0aa723320d106f8ad6bf8d5e489-1054381811' });

// const preference = new Preference(client);

// preference.create({
//   'items': [
//      {
// 	 'title': 'Meu produto',
// 	 'quantity': 1,
// 	 'currency_id': 'BRL',
// 	 'unit_price': 100
//      }
//   ]
// }).then((result) => console.log(result))
// 	.catch((error) => console.log(error));

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
// mercadopago.configure({
// 	access_token: "",
// });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "../client"))); /*------------------There could be an error here with the colons "__dirname"-------------*/
app.use(cors());

app.get("/", function (req, res) {
    const filePath = path.resolve(__dirname, "..", "client", "index.html")
    es.sendFile(filePath);
});

app.post("/create_preference", (req, res) => {

	let preference = {
		items: [
			{
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			"success": "http://localhost:8080",
			"failure": "http://localhost:8080",
			"pending": ""
		},
		auto_return: "approved",
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		});
});

app.get('/feedback', function (req, res) {
	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
});

app.listen(8080, () => {
	console.log("The server is now running on Port 8080");
});