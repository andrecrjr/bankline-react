import React from "react";
import PopUp from "./PopUp";
import { useHistory } from "react-router";
import payme from "../../static/payme.svg";

export const ActivityClientPages = React.createContext({});

export const UserBox = props => {
  const { id } = props.user;
  const { user } = props;
  const [openPopup, setOpen] = React.useState({ id: id, status: false });
  const { location, ...history } = useHistory();
  const openTab = e => {
    e.preventDefault();
    setOpen({ id: id, status: !openPopup.status });
    if (location.pathname !== "/") {
      history.push("/");
    }
  };

  return (
    <>
      <ActivityClientPages.Provider
        value={{ setOpen, user, openTab, openPopup }}
      >
        <PopUp />
        <div key={id} className="box__user--wrapper">
          <UserClient user={props.user} insidePage={false} />
          <div className="box__user-pay-wrapper">
            <img src={payme} onClick={openTab} />
            <span className="box__user-pay-wrapper--payme" onClick={openTab}>
              Pagar
            </span>
          </div>
        </div>
      </ActivityClientPages.Provider>
    </>
  );
};

export const UserClient = ({ user, insidePage }) => {
  const { username, img, name, id } = user;
  return (
    <div
      className={`box__user--wrapper-client ${insidePage ? `user-page` : null}`}
    >
      <img src={img} alt={username} className="box__user--wrapper-image" />
      <div
        class={`box__user--wrapper-description ${
          insidePage ? `user-page` : null
        }`}
      >
        <label>{name}</label>
        <div className="box__user--wrapper-username">
          <label>id: {id}</label>
          <label className="box__user--wrapper-username label">
            {username}
          </label>
        </div>
      </div>
    </div>
  );
};
