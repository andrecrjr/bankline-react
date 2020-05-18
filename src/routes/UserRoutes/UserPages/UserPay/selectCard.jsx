import React, { useState } from "react";
import cardIcon from "static/cardIcon.svg";
import { Link } from "react-router-dom";
import alert from "static/alert.svg";
import { ButtonPay } from "components/Buttons";

export const SelectedCard = ({ cards }) => {
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
          <CardSelection
            card={cards.filter((card) => card.statusSelected === true)}
          />
        )}
      </div>

      <ButtonPay link={cards.length >= 1 ? `/transaction` : `/create-card`}>
        Pagar
      </ButtonPay>
    </section>
  );
};

export const CardSelection = ({ card }) => {
  if (card.length === 1) {
    return (
      <>
        <img src={cardIcon} alt="cartão de crédito" />
        <Link to="/select-card">
          <p className="box__user--number-form" style={{ color: "white" }}>
            Forma de pagamento:
          </p>
          <p className="box__user--number-selected">
            Cartão de crédito com final:
            {card[0].numberCard.toString().slice(-4)}
          </p>
        </Link>
      </>
    );
  }
  return (
    <>
      <img src={cardIcon} alt="icone do cartão" />
      <p>
        Nenhum cartão selecionado para o pagamento! <br></br>
        <Link to="/select-card">Selecione seu cartão para continuar!</Link>
      </p>
    </>
  );
};
