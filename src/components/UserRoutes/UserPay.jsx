import React from "react";
import { UserClient } from "../ListUsers/UserBox";
import alert from "../../static/alert.svg";
import { ButtonPay } from "../Buttons";
import { Link } from "react-router-dom";

export default function UserPay({ user }) {
  console.log(user);
  return (
    <section className="popover-user__information">
      <UserClient user={user} insidePage={true} />
      <InputPrice user={user} />
      <CreditCards />
    </section>
  );
}

export const InputPrice = ({ user }) => {
  return (
    <section className="box__user--input">
      <label for="value-pay">R$</label>
      <input type="text" id="value-pay" placeholder="0,00" />
    </section>
  );
};

export const CreditCards = () => {
  return (
    <section className="box__user--creditcards">
      <div class="box__user--creditcards__alert">
        <img src={alert} />
        <p>
          Nenhum cartão de crédito cadastrado?{" "}
          <Link to="/pay-card">Cadastrar agora!</Link>
        </p>
      </div>
      <ButtonPay link="/pay-card">Pagar</ButtonPay>
    </section>
  );
};
