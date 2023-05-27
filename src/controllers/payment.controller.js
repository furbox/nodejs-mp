import mercadopago from "mercadopago";
import { MP_ACCESS_TOKEN, HOST } from "../config.js";

export const createOrder = async (req, res) => {
    mercadopago.configure({
        access_token: MP_ACCESS_TOKEN
    });

    const result = await mercadopago.preferences.create({
        items: [
            {
                title: 'Laptop',
                unit_price: 10,
                quantity: 1,
                currency_id: 'MXN'
            }
        ],
        back_urls: {
            success: `${HOST}/success-order`, //`http://localhost:3000/success-order
            failure: `${HOST}/failure-order`, //`http://localhost:3000/failure-order
            pending: `${HOST}/pending-order` //`http://localhost:3000/pending-order
        },
        notification_url: 'https://affa-2806-10be-c-428a-791f-13dc-54b-f734.ngrok.io/webhook-order',
    })

    console.log(result);
    res.send(result.body);
};

export const successOrder = async (req, res) => {
    res.send('order success');
};

export const failureOrder = async (req, res) => {
    res.send('order failure');
};

export const pendingOrder = async (req, res) => {
    res.send('order pending');
};

export const webhookOrder = async (req, res) => {
    const payment = req.query;
    console.log(req.query);
    try {
        if (payment.type === 'payment') {
            const data = await mercadopago.payment.findById(req.query['data.id']);
            if(data.status === 'approved') {
                //save in database
            }else{
                //save in database
            }
            console.log(data);
        }

        res.sendStatus(204);
    } catch (error) {
        console.log(error);
        res.sendStatus(500).json({ error: error.message });
    }
};