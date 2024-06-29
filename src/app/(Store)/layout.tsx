import React from "react";
import Nav from "../component/Nav";

function Storelayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Nav />
      <div className=" mt-20">{children}</div>
    </div>
  );
}

export default Storelayout;
