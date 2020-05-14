import React from "react";
import { PayClientContext } from "../UserContext";
import cardIcon from "static/cardIcon.svg";
import okIcon from "static/okIcon.svg";
import crossCard from "static/crossCard.svg";
import { ButtonPay } from "components/Buttons";

import { useSaveCard } from "../utilHooks";
import { Link, useHistory } from "react-router-dom";

const UserCards = () => {
  const { userState, dispatch } = React.useContext(PayClientContext);
  const history = useHistory();
  const [select, setSelected] = React.useState({ status: false, id: 0 });
  const saveCardLocal = useSaveCard(userState.cards);

  const selectCard = (e, index, userSelected) => {
    e.preventDefault();
    if (userSelected) {
      userSelected = false;
    }
    setSelected({ status: true, id: index });
  };

  const dispatchCard = (e) => {
    e.preventDefault();
    dispatch({ type: "ACTIVATE_CARD", id: select.id });
    history.push("/pay");
  };

  React.useEffect(() => {
    saveCardLocal();
  }, [saveCardLocal]);

  return (
    <section className="page-user__cards">
      <section className="page-user__cards--container">
        <h1>Cartões Cadastrados</h1>
        <form onSubmit={dispatchCard}>
          <ul className="page-user__cards--list">
            {userState.cards.map((card, index) => (
              <li onClick={(e) => selectCard(e, index, card.userSelected)}>
                <div
                  className={`page-user__cards--card-box ${
                    (select.id === index && select.status) ||
                    card.statusSelected
                      ? `on`
                      : `off`
                  }`}
                >
                  <img src={cardIcon} alt="icone do cartão de crédito" />
                  <h3 className="page-user__cards--card-box--number">
                    {card.numberCard}
                  </h3>
                  <img
                    src={okIcon}
                    alt="icone de cartão selecionado"
                    className={`page-user__cards--card-box--selected ${
                      (select.id === index && select.status) ||
                      card.statusSelected
                        ? `on`
                        : `off`
                    }`}
                  />
                </div>
              </li>
            ))}
            <Link to="/create-card">
              <li className="page-user__cards--card-box add-more">
                <img src={crossCard} alt="adicionar cartão" />
                <h3 className="add-new">Cadastrar novo cartão</h3>
              </li>
            </Link>
          </ul>
          <ButtonPay width={"85%"} margin={"0 auto"}>
            Selecionar Cartão
          </ButtonPay>
        </form>
      </section>
    </section>
  );
};

export default UserCards;
