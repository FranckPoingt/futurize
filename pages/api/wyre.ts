// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import CryptoJS from 'crypto-js';
import nc from "next-connect";

const app = nc();


// Example is assuming use of Express and Axios
// Make sure you are using the proper API keys for the correct environment (test, prod).
export default async (req: NextApiRequest, res: NextApiResponse) => {
        const axios = require('axios');
        const testUrl = "https://api.testwyre.com";
        const productionUrl = "https://api.sendwyre.com";
        const WYRE_TEST_API_KEY = process.env.WYRE_API_KEY;
        const YOUR_SECRET_KEY = process.env.WYRE_SECRET_KEY;

        const signature = (url, data) => {
            const dataToBeSigned = url + data;
            console.log(dataToBeSigned);
            
            
            const token = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(dataToBeSigned.toString(CryptoJS.enc.Utf8), YOUR_SECRET_KEY));
            //const token = "https://pay.testwyre.com/purchase?accountId=AC_7RHCPVJVVEQ&country=US&failureRedirectUrl=https%3A%2F%2Fwww.sendwyre.com&amount=10&redirectUrl=https%3A%2F%2Fwww.sendeyre.com&utm_campaign=AC_Y22RAQXEYV6&utm_medium=widget&paymentMethod=debit-card&reservation=EFX6DN9ECRPTPDJBEL6U&sourceCurrency=USD&utm_source=checkout"
            return token;
        }

        try {
            const timestamp = new Date().getTime();
            const url = `${testUrl}/v3/orders/reserve?timestamp=${timestamp}`;
            const headers = {};
            const body = {
                referrerAccountId: "AC_7RHCPVJVVEQ"
            }
            const details = JSON.stringify(body);
            
            headers['Content-Type'] = 'application/json';
            headers['X-Api-Key'] = WYRE_TEST_API_KEY;
            headers['X-Api-Signature'] = signature(url, details);
            const config = {
                method: "POST",
                url: url,
                headers: headers,
                data: details
            }
            const response = await axios(config);

            res.send(response.data);
            //res.redirect(response.data.url)
        } catch (error) {
            throw error
        }

        
    }

