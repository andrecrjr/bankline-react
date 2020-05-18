import React, { useState } from "react";
import { UserClient } from "routes/ListUsers/UserBox";
import { PayClientContext } from "../UserContext";
import { SelectedCard } from "./selectCard";
import { InputPrice } from "./Input";

export default function UserPay({ user }, props) {
  const { userState, dispatchTransact } = React.useContext(PayClientContext);
  const [money, setMoney] = useState("6.00");
  const onChangePrice = (money) => {
    setMoney(money);
  };
  console.log(props);

  const newTransaction = (e) => {
    e.preventDefault();
    console.log(userState.cards.filter((card) => card.statusSelected === true));
    console.log({
      cardUsed: userState.cards.filter((card) => card.statusSelected === true),
      userPaid: user,
      valuePaid: money,
    });
    if (money > 0) {
      /*
      dispatchTransact({
        type: "PAY_TRANSACTION",
        payload: {
          card: userState.cards.filter((card) => card.statusSelected === true),
          user,
        },
      });*/
    }
  };

  return (
    <section className="page-user__information">
      <UserClient user={user} insidePage={true} />
      <form style={{ display: "contents" }} onSubmit={newTransaction}>
        <InputPrice priceData={{ money, setMoney, onChangePrice }} />
        <SelectedCard cards={userState.cards} />
      </form>
    </section>
  );
}
