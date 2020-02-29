import React from "react";
import { Back } from "../Buttons";
import { ActivityClientPages } from "./UserBox";
import UserRoutes from "../UserRoutes";

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
          <UserRoutes user={user} />
        </section>
      </div>
    );
  }
  return null;
};
