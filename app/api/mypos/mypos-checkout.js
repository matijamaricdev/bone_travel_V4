// pages/api/mypos-checkout.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        // Retrieve amount and currency from the request body
        const { amount, currency } = req.body;
  
        // Make an API call to MyPOS to create the checkout session
        const response = await fetch('https://api.mypos.com/v1/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.MYPOS_API_KEY}`, // Use your API key from MyPOS
          },
          body: JSON.stringify({
            amount,
            currency,
            callbackUrl: 'https://your-website.com/booking-confirmed',
            cancelUrl: 'https://your-website.com/payment-cancelled',
          }),
        });
  
        // Parse the response to get the checkoutId
        const data = await response.json();
  
        if (data.checkoutId) {
          res.status(200).json({ checkoutId: data.checkoutId });
        } else {
          res.status(400).json({ error: 'Failed to create checkout session' });
        }
      } catch (error) {
        console.error('Error fetching MyPOS checkout:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  