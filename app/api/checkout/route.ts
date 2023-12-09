import { NextResponse } from "next/server";
import { stripe } from "@/app/Lib/stripe";
import { getAllProducts } from "@/app/All/page";
import { validateCartItems } from "use-shopping-cart/utilities";

export async function POST(request: Request) {
  const cartDetails = await request.json();
  const origin = request.headers.get("origin");
  const inventory = await getAllProducts();
  const line_Items = validateCartItems(inventory, cartDetails);

  try {
    const session = await stripe.checkout.sessions.create({
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      line_items: line_Items,
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
      shipping_options: [{ shipping_rate: "shr_1OKsWuIEKu9GuPeaiicneZMR" }],
      billing_address_collection: "auto",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/Cart`,
    });
    return NextResponse.json(session);
  } catch (error) {
    console.log(error);
  }
}
