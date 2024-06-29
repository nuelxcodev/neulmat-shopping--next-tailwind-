import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function page() {
  const profile = { name: "chukwuemeka", email: "chuwuemekacodev@gmail.com" };
  return (
    <div>
      <div className=" shadow-xl p-4 text-2xl  font-bold text-green-500 flex justify-between items-center">
        <FontAwesomeIcon icon={faUser} />
        <h1>{profile.name}</h1>
      </div>
      {profile.email}
    </div>
  );
}

export default page;
