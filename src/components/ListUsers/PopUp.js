import React from "react";
import { Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
import UserPay from "../UserRoutes/UserPay";
import { UserCards } from "../UserRoutes/UserCards";
import { Back } from "../Buttons/";
import { ActivityClientPages } from "./UserBox";

export const PopUp = () => {
  const { user, openPopup, openTab } = React.useContext(ActivityClientPages);
  if (openPopup.status) {
    return (
      <div className={`window-user ${openPopup.status ? `open` : `close`}`}>
        <section className="popover-user">
          <div className="popover--top">
            <p>Pagamento para {user.name}</p>
            <span onClick={openTab}>X</span>
          </div>
          <div className="button--back">
            <Back />
          </div>
          <UserPaths user={user} />
        </section>
      </div>
    );
  }
  return null;
};

const UserPaths = ({ user }) => {
  const history = useHistory();
  React.useEffect(() => {
    history.push("/pay");
  }, []);
  return (
    <React.Fragment>
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
