import React from "react";
import { Link } from "react-router-dom";

export default function UserPay({ user }) {
  console.log(user);
  return (
    <section className="popover-user__information">
      <img src={user.img} />

      <Link to="/pay-card">
        <button>Pagar</button>
      </Link>
    </section>
  );
}
