import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import UserPay from "./UserPay";
import { UserCards } from "./UserCards";

export default ({ user }) => {
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
