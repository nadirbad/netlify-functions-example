import gateway from './../lib/gateway.js';

const statusCodeOk = 200;
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type'
};

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: headers, body: 'Method Not Allowed' };
  }

  // Parse the body contents into an object.
  console.log(event.body);
  const data = JSON.parse(event.body);
  console.log(data);

  // Make sure we have all required data. Otherwise, return error.
  if (!data.payment_method_nonce || !data.amount) {
    console.error('Required information is missing.');

    return {
      statusCode: 400,
      headers: headers,
      body: '' // JSON.stringify({ status: 'missing-information' })
    };
  }

  // Create a transaction
  const paymentResult = await gateway.transaction.sale({
    amount: data.amount,
    paymentMethodNonce: data.payment_method_nonce,
    options: {
      submitForSettlement: true
    }
  });

  if (paymentResult.success) {
    return {
      statusCode: statusCodeOk,
      headers: headers,
      body: JSON.stringify({ transaction: paymentResult.transaction.id })
    };
  } else {
    const transactionErrors = result.errors.deepErrors();
    return {
      statusCode: statusCodeOk,
      headers: headers,
      body: JSON.stringify({ errors: transactionErrors })
    };
  }
};
