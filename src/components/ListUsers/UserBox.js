import React, { useReducer } from "react";
import payme from "../../static/payme.svg";
import { PopUp } from "./PopUp";
import { useHistory } from "react-router";

export const UserBox = props => {
  const { id, username, name, img } = props.user;
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
      <PopUp user={props.user} statePopup={openPopup} closePopup={openTab} />

      <div key={id} className="box__user--wrapper">
        <UserClient user={props.user} />
        <div className="box__user-pay-wrapper">
          <img src={payme} onClick={openTab} />
          <span className="box__user-pay-wrapper--payme" onClick={openTab}>
            Pagar
          </span>
        </div>
      </div>
    </>
  );
};

export const UserClient = ({ user, inside }) => {
  const { username, img, name, id } = user;
  return (
    <div className={`box__user--wrapper-client ${inside ? `user-page` : null}`}>
      <img src={img} alt={username} className="box__user--wrapper-image" />
      <div
        class={`box__user--wrapper-description ${inside ? `user-page` : null}`}
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
