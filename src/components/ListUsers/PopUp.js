import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import UserPay from "../UserRoutes/UserPay";
import { UserCards } from "../UserRoutes/UserCards";

export const PopUp = ({ user, statePopup, closePopup }) => {
  if (statePopup.status) {
    return (
      <div className={`window-user ${statePopup ? `open` : `close`}`}>
        <section className="popover-user">
          <div className="popover--top">
            <p>Pagamento para {user.name}</p>
            <span onClick={closePopup}>X</span>
          </div>
          <UserPaths user={user} />
        </section>
      </div>
    );
  }
  return null;
};

const UserPaths = ({ user }) => {
  return (
    <React.Fragment>
      <Redirect from="/" to="/pay" />
      <Switch>
        <Route
          path="/pay"
          exact={true}
          render={props => <UserPay {...props} user={user} />}
        />
        <Route
          path="/pay-card"
          exact={true}
          render={props => <UserCards {...props} user={user} />}
        />
      </Switch>
    </React.Fragment>
  );
};
