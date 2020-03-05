import React from "react";
import { PayClientContext } from "../UserContext";
import cardIcon from "../../../static/cardIcon.svg";
import okIcon from "../../../static/okIcon.svg";
import crossCard from "../../../static/crossCard.svg";
import { ButtonPay } from "../../Buttons";
import { Link } from "react-router-dom";

const UserCards = () => {
  const { userState } = React.useContext(PayClientContext);
  const [select, setSelected] = React.useState({ status: false, id: 0 });

  const selectCard = (e, index) => {
    e.preventDefault();
    setSelected({ status: true, id: index });
  };
  return (
    <section className="page-user__cards">
      <section className="page-user__cards--container">
        <h1>Cartões Cadastrados</h1>
        <form>
          <ul className="page-user__cards--list">
            {userState.cards.map((card, index) => (
              <li onClick={e => selectCard(e, index)}>
                <div
                  className={`page-user__cards--card-box ${
                    select.id === index && select.status ? `on` : `off`
                  }`}
                >
                  <img src={cardIcon} />
                  <h3 className="page-user__cards--card-box--number">
                    {card.numberCc}
                  </h3>
                  <img
                    src={okIcon}
                    className={`page-user__cards--card-box--selected ${
                      select.id === index && select.status ? `on` : `off`
                    }`}
                  />
                </div>
              </li>
            ))}
            <Link to="/create-card">
              <li className="page-user__cards--card-box add-more">
                <img src={crossCard} />
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
