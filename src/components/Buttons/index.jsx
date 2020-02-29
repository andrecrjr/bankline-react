import React from "react";
import { Link, useHistory } from "react-router-dom";
import { ActivityClientPages } from "../ListUsers/UserBox";

export const ButtonPay = props => {
  const { location, ...history } = useHistory();

  if (location.pathname === "/pay") {
    return (
      <Link to={props.link}>
        <button class="main--pay" type="submit">
          {props.children}
        </button>
      </Link>
    );
  }

  return (
    <a href="">
      <button class="main--pay" type="submit">
        {props.children}
      </button>
    </a>
  );
};

export const Back = () => {
  const { location, ...history } = useHistory();
  const { setOpen, id } = React.useContext(ActivityClientPages);
  const close = () => {
    if (location.pathname === "/pay") {
      setOpen({ id: id, status: false });
    }
    history.goBack();
  };

  return <span onClick={close}>Voltar</span>;
};
