import axios from "axios";
import {setOrders} from "../reducers/ordersReducer";
 
const sha1 = require('js-sha1');

export const getOrders = () => {
    return async (dispatch) => {
        if (requestToken) return;

        const baseUrl = 'http://api.pixlpark.com/';
        const oauth = await axios.get(`${baseUrl}oauth/requesttoken`);
        const requestToken = oauth.data.RequestToken;

        const concatenatedValue  = `${requestToken}8e49ff607b1f46e1a5e8f6ad5d312a80`;

        const password = sha1(concatenatedValue);

        const getAccessToken = await axios.get(`${baseUrl}oauth/accesstoken`, {params: {
            'oauth_token': requestToken,
            'grant_type': 'api',
            username: '38cd79b5f2b2486d86f562e3c43034f8',
            password,
        }})

        const accessToken = getAccessToken.data.AccessToken;

        const response = await axios.get(`${baseUrl}orders`, { params: {
            'oauth_token': accessToken,
        }
        })
        dispatch(setOrders(response.data))
    }
}