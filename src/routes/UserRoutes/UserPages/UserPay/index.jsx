import React, { useState } from "react";
import { UserClient } from "routes/ListUsers/UserBox";
import { PayClientContext } from "../UserContext";
import { SelectedCard } from "./selectCard";

export default function UserPay({ user }) {
  const { userState } = React.useContext(PayClientContext);

  return (
    <section className="page-user__information">
      <UserClient user={user} insidePage={true} />
      <InputPrice user={user} />
      <SelectedCard cards={userState.cards} />
    </section>
  );
}

export const InputPrice = () => {
  const [price, setPrice] = useState();
  const change = (money) => {
    setPrice(money);
  };
  const currency = (moneyValue) => {
    if (moneyValue.length > 0) {
      setPrice(parseFloat(moneyValue).toFixed(2).toString());
    }
  };

  return (
    <section className="box__user--input">
      <input
        type="number"
        id="value-pay"
        placeholder="6.00"
        step=".01"
        onChange={(e) => change(e.target.value)}
        value={price}
        onBlur={(e) => currency(e.target.value)}
      />
    </section>
  );
};
