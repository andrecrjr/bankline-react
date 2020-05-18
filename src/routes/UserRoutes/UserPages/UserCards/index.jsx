import React from "react";
import { PayClientContext } from "../UserContext";
import crossCard from "static/crossCard.svg";
import { ButtonPay } from "components/Buttons";
import { useSaveCard } from "../utilHooks";
import { Link, useHistory } from "react-router-dom";
import { CardBoxSelection } from "./CardSelection";

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
              <CardBoxSelection
                key={index}
                boxData={{ card, index }}
                boxState={{ select, selectCard }}
              />
            ))}
            <Link to="/create-card">
              <li className="page-user__cards--card-box add-more">
                <img src={crossCard} alt="adicionar cartão" />
                <span className="add-new">Cadastrar novo cartão</span>
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
