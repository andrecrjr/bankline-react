import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import UserPay from "./UserPages/UserPay/";
import { UserCreateCard } from "./UserPages/CreateCards";
import UserCards from "./UserPages/UserCards";
import { ClientReducer, initialState } from "./UserReducer";
import { PayClientContext } from "./UserPages/UserContext";
import TransactionClient from "./UserPages/TransactionClient";

export default ({ user }) => {
  const history = useHistory();
  const [userState, dispatch] = React.useReducer(ClientReducer, initialState);

  React.useEffect(() => {
    history.push("/pay");
  }, [history]);
  return (
    <React.Fragment>
      <PayClientContext.Provider value={{ userState, dispatch }}>
        <Switch>
          <Route
            path="/pay"
            exact={true}
            render={(props) => <UserPay {...props} user={user} />}
          />
          <Route
            path="/create-card"
            exact={true}
            render={(props) => <UserCreateCard {...props} user={user} />}
          />
          <Route
            path="/select-card"
            exact={true}
            render={(props) => <UserCards {...props} user={user} />}
          />
          <Route
            path="/transaction"
            exact={true}
            render={(props) => <TransactionClient {...props} user={user} />}
          />
        </Switch>
      </PayClientContext.Provider>
    </React.Fragment>
  );
};
