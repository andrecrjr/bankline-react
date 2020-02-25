import React from "react";
import { Link } from "react-router-dom";
import { UserClient } from "../ListUsers/UserBox";

export default function UserPay({ user }) {
  console.log(user);
  return (
    <section className="popover-user__information">
      <UserClient user={user} inside={true} />

      <Link to="/pay-card">
        <button>Pagar</button>
      </Link>
    </section>
  );
}
