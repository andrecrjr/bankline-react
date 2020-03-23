import React from "react";
import { UserClient } from "components/ListUsers/UserBox";
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
  return (
    <section className="box__user--input">
      <label for="value-pay">R$</label>
      <input type="text" id="value-pay" placeholder="0,00" />
    </section>
  );
};

export const CreditCards = ({ cards }) => {
  return (
    <section className="box__user--creditcards">
      <div class="box__user--creditcards__alert">
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
            card={cards.filter(card => card.statusSelected === true)}
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
  console.log(card);
  if (card.length === 1) {
    return (
      <>
        <img src={cardIcon} alt="cartão de crédito" />
        <Link to="/select-card">
          <p className="box__user--number-form" style={{ color: "white" }}>
            Forma de pagamento:
          </p>
          <p className="box__user--number-selected">
            Cartão de crédito com final: {card[0].numberCc}
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
