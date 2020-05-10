import React, { useState } from "react";
import { UserClient } from "routes/ListUsers/UserBox";
import alert from "static/alert.svg";
import cardIcon from "static/cardIcon.svg";
import { ButtonPay } from "components/Buttons";
import { Link } from "react-router-dom";
import { PayClientContext } from "../UserContext";

export default function UserPay({ user }) {
  const { userState } = React.useContext(PayClientContext);

  return (
    <section className="page-user__information">
      <UserClient user={user} insidePage={true} />
      <InputPrice user={user} />
      <CreditCards cards={userState.cards} />
    </section>
  );
}

export const InputPrice = () => {
  const [price, setPrice] = useState();
  const change = (money) => {
    setPrice(money);
  };
  const currency = (moneyValue) => {
    console.log(moneyValue);
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

export const CreditCards = ({ cards }) => {
  return (
    <section className="box__user--creditcards">
      <div class={`user-choice ${cards.length > 0 ? `selected` : `alert`}`}>
        {cards.length === 0 ? (
          <>
            <img src={alert} alt="Alerta cartão de credito/debito não criado" />
            <p>
              Nenhum cartão de crédito cadastrado?{" "}
              <Link to="/create-card">Cadastrar agora!</Link>
            </p>
          </>
        ) : (
          <SelectedCard
            card={cards.filter((card) => card.statusSelected === true)}
          />
        )}
      </div>

      <ButtonPay link={cards.length >= 1 ? `/create-card` : `/create-card`}>
        Pagar
      </ButtonPay>
    </section>
  );
};

const SelectedCard = ({ card }) => {
  if (card.length === 1) {
    return (
      <>
        <img src={cardIcon} alt="cartão de crédito" />
        <Link to="/select-card">
          <p className="box__user--number-form" style={{ color: "white" }}>
            Forma de pagamento:
          </p>
          <p className="box__user--number-selected">
            Cartão de crédito com final: {card[0].numberCc.toString().slice(-4)}
          </p>
        </Link>
      </>
    );
  }
  return (
    <>
      <img src={cardIcon} alt="cartão de crédito" />
      <p>
        Nenhum cartão selecionado para o pagamento! <br></br>
        <Link to="/select-card">Selecione seu cartão para continuar!</Link>
      </p>
    </>
  );
};
