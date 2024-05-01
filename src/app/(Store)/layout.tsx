import React from "react";
import Nav from "../component/Nav";

function Storelayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Nav />
      <div>{children}</div>
    </div>
  );
}

export default Storelayout;
