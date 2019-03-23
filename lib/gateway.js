import { connect, Environment } from 'braintree';
require('dotenv').config();

const environment = process.env.BT_ENVIRONMENT;
const capitalizedEnvironment =
  environment.charAt(0).toUpperCase() + environment.slice(1);

const gateway = connect({
  environment: Environment[capitalizedEnvironment],
  merchantId: process.env.BT_MERCHANT_ID,
  publicKey: process.env.BT_PUBLIC_KEY,
  privateKey: process.env.BT_PRIVATE_KEY
});

export default gateway;
