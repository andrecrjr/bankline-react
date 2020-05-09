import React from "react";
import { BackButton } from "../../components/Buttons";
import { ActivityClientPages } from "./UserBox";
import UserRoutes from "../UserRoutes";

export default function PopUp() {
  const { user, openPopup, openTab } = React.useContext(ActivityClientPages);
  if (openPopup.status) {
    return (
      <div className={`window-user ${openPopup.status ? `open` : `close`}`}>
        <section className="page-user">
          <div className="page-user--top">
            <p className="page-user--top__pay-info">
              Pagamento para {user.name}
            </p>
            <span onClick={openTab}>X</span>
          </div>
          <BackButton />
          <UserRoutes user={user} />
        </section>
      </div>
    );
  }
  return null;
}
