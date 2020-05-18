import React from "react";
import { UserClient } from "routes/ListUsers/UserBox";

export default function ({ user }) {
  return (
    <section className="page-user__information">
      <UserClient user={user} insidePage={true} />
    </section>
  );
}
