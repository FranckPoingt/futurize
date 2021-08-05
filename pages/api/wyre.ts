// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import CryptoJS from 'crypto-js';
import nc from "next-connect";
const axios = require('axios').default;

const app = nc();

// Example is assuming use of Express and Axios
// Make sure you are using the proper API keys for the correct environment (test, prod).
export default async (req: NextApiRequest, res: NextApiResponse) => {
        const testUrl = "https://api.testwyre.com";
        const productionUrl = "https://api.sendwyre.com";
        const WYRE_TEST_API_KEY = process.env.WYRE_API_KEY;
        const YOUR_SECRET_KEY = process.env.WYRE_SECRET_KEY;
        const accountId = "AC_7RHCPVJVVEQ";

        const signature = (url, data) => {
            const dataToBeSigned = url + data;
            const token = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(dataToBeSigned.toString(CryptoJS.enc.Utf8), YOUR_SECRET_KEY));
            return token;
        }

        try {
            const timestamp = new Date().getTime();
            const url = `${testUrl}/v3/orders/reserve?timestamp=${timestamp}`;
            const headers = {};
            const body = {
                referrerAccountId: accountId
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

