# Netlify Lambda Function example

This is an example of serverless AWS Lambda Function on [Netlify]() and implementation of Braintree payment [Braintree Simple Server](https://developers.braintreepayments.com/start/hello-server/node). We can easily use Lambda function to implement simple Node.js server.

## Read the tutorial

You can find full tutorial on my [blog post](https://nadirbad.dev/posts/serverless-payments-with-braintree-and-netlify-functions/).

## Install

```
npm install
```

## Configure

1. Setup Braintree Sandbox environment for testing [Sandbox](https://sandbox.braintreegateway.com/login)
2. Create `.env` file in root of project and fill it in with your [API credentials](https://articles.braintreepayments.com/control-panel/important-gateway-credentials#api-credentials). Here is the content of `.env` file:

```
BT_ENVIRONMENT = "sandbox"
BT_MERCHANT_ID = "XXXXXXX"
BT_PUBLIC_KEY = "XXXXXXX"
BT_PRIVATE_KEY = "XXXXXXX"
```

## Serve and test Lambda functions locally

```
npm run dev
```


`netlify-lambda` starts server on http://localhost:9000/ and there are two functions you need:

**1. Generate a client token**

```sh
curl -X GET http://localhost:9000/braintree-get-token
```

**2. Create a transaction**

You can create a transaction using an `amount` and the `nonceFromTheClient`.

```sh
curl -X POST \
  http://localhost:9000/braintree-create-transaction \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{ "payment_method_nonce": "fake-valid-nonce",	"amount": 10.0 }'
```

## See the Live Functions

[![Netlify Status](https://api.netlify.com/api/v1/badges/d8c39b5f-dc9d-41b5-9134-fe6826dedecd/deploy-status)](https://app.netlify.com/sites/netlify-lambda-braintree/deploys)

https://netlify-lambda-braintree.netlify.com/

## License

MIT © [Nadir Badnjevic](https://nadirbad.dev/)
