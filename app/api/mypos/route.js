// app/api/mypos/route.js (or .ts if using TypeScript)
export async function POST(req) {
    const body = await req.json();
  
    // Call your MyPOS API with secret keys, etc.
    const myPOSRes = await fetch("https://www.mypos.com/your-api-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer YOUR_SECRET_KEY`,
      },
      body: JSON.stringify({
        amount: body.amount,
        currency: body.currency,
      }),
    });
  
    const data = await myPOSRes.json();
  
    return Response.json({ checkoutId: data.checkoutId });
  }
  