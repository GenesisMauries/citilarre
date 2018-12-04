export const host =
  'https://sandbox.apihub.citi.com/gcb/api/clientCredentials/oauth2/token/mx/gcb/';

export const getData = data => {
  console.log('getData');
};

export const express = require('express');
export const cors = require('cors');
export const app = express();

app.use(cors());

//?grant_type=client_credentials&scope=/api
