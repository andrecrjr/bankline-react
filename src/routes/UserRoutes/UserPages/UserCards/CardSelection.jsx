import React from "react";
import cardIcon from "static/cardIcon.svg";
import okIcon from "static/okIcon.svg";

export const CardBoxSelection = ({ boxState, boxData }) => {
  const { card, index } = boxData;
  const { select, selectCard } = boxState;
  return (
    <li
      className={`page-user__cards--card-box ${
        (select.id === index && select.status) || card.statusSelected
          ? `on`
          : `off`
      }`}
      onClick={(e) => selectCard(e, index, card.userSelected)}
    >
      <div className="page-user__cards--card-box--selection">
        <img src={cardIcon} alt="icone do cartão de crédito" />
        <h3 className="page-user__cards--card-box--number">
          {card.numberCard}
        </h3>
        <img
          src={okIcon}
          alt="icone de cartão selecionado"
          className={`page-user__cards--card-box--selected ${
            (select.id === index && select.status) || card.statusSelected
              ? `on`
              : `off`
          }`}
        />
      </div>
    </li>
  );
};
