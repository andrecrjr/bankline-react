import React from "react";
import { Link, useHistory } from "react-router-dom";
import { ActivityClientPages } from "../ListUsers/UserBox";
import arrowBack from "../../static/arrowBack.svg";

export const ButtonPay = props => {
  const { location } = useHistory();

  if (location.pathname === "/pay") {
    return (
      <Link to={props.link}>
        <button className="main--pay" type="submit">
          {props.children}
        </button>
      </Link>
    );
  }

  return (
    <button
      className="main--pay"
      type="submit"
      style={{ width: props.width, margin: props.margin }}
    >
      {props.children}
    </button>
  );
};

export const BackButton = () => {
  const { location, ...history } = useHistory();
  const { setOpen, user } = React.useContext(ActivityClientPages);
  const close = () => {
    if (location.pathname === "/pay") {
      setOpen({ id: user.id, status: false });
    }
    history.goBack();
  };

  return (
    <span onClick={close} className="page-user__back-button">
      <img src={arrowBack} />
    </span>
  );
};
