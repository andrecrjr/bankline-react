import React, { useState } from "react";
import { UserClient } from "routes/ListUsers/UserBox";
import { PayClientContext } from "../UserContext";
import { SelectedCard } from "./selectCard";
import { InputPrice } from "./Input";

export default function UserPay({ user }) {
  const { userState } = React.useContext(PayClientContext);
  const [price, setPrice] = useState();
  const onChangePrice = (money) => {
    setPrice(money);
  };

  return (
    <section className="page-user__information">
      <UserClient user={user} insidePage={true} />
      <form style={{ display: "contents" }}>
        <InputPrice priceData={{ price, setPrice, onChangePrice }} />
        <SelectedCard cards={userState.cards} />
      </form>
    </section>
  );
}
