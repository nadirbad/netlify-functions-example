import gateway from './../lib/gateway.js';

export async function handler(event, context) {
  const response = await gateway.clientToken.generate();

  const clientToken = response.clientToken;

  return {
    statusCode: 200,
    body: JSON.stringify({ token: clientToken })
  };
}
