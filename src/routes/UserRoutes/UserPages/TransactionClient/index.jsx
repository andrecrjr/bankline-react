import React from "react";
import { UserClient } from "routes/ListUsers/UserBox";
import { PayClientContext } from "../UserContext";

export default function ({ user }) {
  const { userState } = React.useContext(PayClientContext);
  return (
    <section className="page-user__information">
      <UserClient user={user} insidePage={true} />
      <section className="transaction__box">
        <h1 className="transaction__box--paid">Pagamento confirmado!</h1>
        <section className="transaction__table">
          <div className="transaction__table--row">
            <span className="transaction__table--row--title">Transação</span>
            <span className="transaction__table--row--description">0000</span>
          </div>
          <div className="transaction__table--row">
            <span className="transaction__table--row--title">Data</span>
            <span className="transaction__table--row--description">0000</span>
          </div>
          <div className="transaction__table--row">
            <span className="transaction__table--row--title">Cartão</span>
            <span className="transaction__table--row--description">0000</span>
          </div>
          <TransactionTable title={`Valor`} description={`0000`} />
        </section>
      </section>
    </section>
  );
}

const TransactionTable = ({ title, description }) => {
  return (
    <div className="transaction__table--row">
      <span className="transaction__table--row--title">Valor</span>
      <span className="transaction__table--row--description">0000</span>
    </div>
  );
};
