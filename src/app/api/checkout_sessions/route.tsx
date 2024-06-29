import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function handler(req: NextRequest) {
  try {
    const data = await req.json();
    const { amount, image, list } = data;

    // create stripe checkout session
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          quantity: 1,
          price_data: {
            unit_amount: amount * 100,
            currency: "USD",
            product_data: {
              name: "Nuelmat",
              description: "jhgfdfghjk",
            },
          },
        },
      ],
      submit_type: "pay",

      mode: "payment",
      success_url: `${req.nextUrl.origin}/checkout/success?sessionId={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/checkout/shipping?canceled=true`,
    });

    console.log(amount, list, image);
    return Response.json(session);
  } catch (error: any) {
    return Response.json({ message: error.message });
  }
}
export { handler as POST };
