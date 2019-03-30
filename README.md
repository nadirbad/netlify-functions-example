# Netlify Lambda Function example

This is an example of serverless Lambda Function on [Netlify]() and implementation of Braintree payment [Braintree Simple Server](https://developers.braintreepayments.com/start/hello-server/node). We can easily use Lambda function to implement simple Node.js server.

## Read the tutorial

You can find full tutorial on my blog post [coming soon]()

## Install

```
yarn install
```

## Configure

1. Setup Braintree Sandbox environment for testing [Sandbox](https://sandbox.braintreegateway.com/login)
2. Create `.env` file in root of project and fill it in with values from your Braintree Sandbox account

```
BT_ENVIRONMENT = "sandbox"
BT_MERCHANT_ID = "XXXXXXX"
BT_PUBLIC_KEY = "XXXXXXX"
BT_PRIVATE_KEY = "XXXXXXX"
```

## Serve and test Lambda functions locally

```
yarn dev
```

`netlify-lambda` starts server on http://localhost:9000/braintree-get-token and http://localhost:9000/braintree-create-transaction.

**1. Generate a client token**

```sh
curl -X GET http://localhost:9000/braintree-get-token
```

**2. Create a transaction**

You can create a transaction using an `amount` and the `nonceFromTheClient`.

```sh
curl -X POST
  http://localhost:9000/braintree-create-transaction
  -H 'Content-Type: application/json'
  -H 'cache-control: no-cache'
  -d '{
	"payment_method_nonce": "fake-valid-nonce",
	"amount": 10.0
}'
```

## See the Live Functions

https://netlify-lambda-braintree.netlify.com/

## License

MIT © [Nadir Badnjevic](https://nadirbad.dev/)
