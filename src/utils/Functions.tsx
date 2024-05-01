"use client";
import { useSearchParams } from "next/navigation";
import { products } from "./Products";
import { useEffect, useState } from "react";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { promises } from "dns";

export function Filtereditem() {
  const categoryquery = useSearchParams().get("category");
  const searchquery: any = useSearchParams().get("search");

  const [result, setresult] = useState([]);

  useEffect(() => {
    if (searchquery) {
      const searchfilter = products;
      const searchText: string = searchquery.toLocaleLowerCase();
      const finalresult: any = searchfilter.filter((search) => {
        return (search.title + search.category + search.description)
          .toLocaleLowerCase()
          .includes(searchText);
      });
      setresult(finalresult);
    }
  }, [searchquery]);

  const items: any = products.filter(
    (product) => product.category === categoryquery
  );
  const filterproduct = categoryquery ? items : searchquery ? result : products;
  return filterproduct;
}

// stripe checkout button funtion
// Define type for environment variable
type PublishableKey = string | undefined;

// Ensure process.env.NEXT_PUBLIC_PUBLISHABLE_SECRET_KEY is properly defined
const publishableKey: PublishableKey =
  process.env.NEXT_PUBLIC_PUBLISHABLE_SECRET_KEY;

// Define default values for amount and email
const defaultAmount = "1000"; // Example default amount
const defaultEmail = "example@example.com"; // Example default email

// Check if publishableKey is defined before passing it to loadStripe
const stripePromise: Promise<Stripe | null> = publishableKey
  ? loadStripe(publishableKey)
  : Promise.resolve(null);

export async function shopNow({
  amount = defaultAmount,
  email = defaultEmail,
}: {
  amount?: string;
  email?: string;
} = {}) {
  const { sessionId } = await fetch("/api/stripe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount, email }),
  }).then((res) => res.json());

  const stripe = await stripePromise;

  if (!stripe || !sessionId) return;

  await stripe.redirectToCheckout({ sessionId });
}
