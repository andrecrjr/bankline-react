import React, { useState } from "react";
import { UserClient } from "routes/ListUsers/UserBox";
import { PayClientContext } from "../UserContext";
import { SelectedCard } from "./selectCard";
import { InputPrice } from "./Input";
import { useHistory } from "react-router-dom";

export default function UserPay({ user }, props) {
  const { userState, dispatchTransact } = React.useContext(PayClientContext);
  const history = useHistory();
  const [money, setMoney] = useState("6.00");
  const onChangePrice = (money) => {
    setMoney(money);
  };

  const newTransaction = (e) => {
    e.preventDefault();
    console.log({
      cardUsed: userState.cards.filter(
        (card) => card.statusSelected === true
      )[0],
      userPaid: user,
      valuePaid: money,
    });
    if (money > 0 && userState.cards.length > 0) {
      dispatchTransact({
        type: "PAY_TRANSACTION",
        payload: {
          card: userState.cards.filter(
            (card) => card.statusSelected === true
          )[0],
          valuePaid: money,
          datetime: new Date(),
        },
      });
      history.push("/transaction");
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
