/* eslint-disable @next/next/no-async-client-component */

import { auth } from "@/app/auth";
import { logout } from "@/lib/action";
import Link from "next/link";

async function Nav() {
  const session = await auth();

  return (
    <div className=" flex w-full shadow-lg py-4  ">
      <div className="navigation">
        <div>
          <Link href="/">HOME</Link>
        </div>
        <div>
          <Link href="/cart">CART</Link>
        </div>
        <div>
          <Link href="/product">PRODUCT</Link>
        </div>
      </div>
      <div className="">
        {session?.user ? (
          <form action={logout}>
            <button type="submit">SIGN OUT</button>
          </form>
        ) : (
          <Link href="/auth/signin">
            <button >SIGN IN</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Nav;
