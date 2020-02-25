import React, { useCallback, useState } from "react";
import Layout from "../Layout";
import { UserBox } from "./UserBox";
const ListUser = props => {
  const [users, setUsers] = useState(null);

  React.useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await fetch("http://careers.picpay.com/tests/mobdev/users");
      const dataUsers = await data.json();
      setUsers(dataUsers);
      console.log(dataUsers);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="section--users">
      {users ? users.map(user => <UserBox user={user} />) : null}
    </div>
  );
};

export const UsersContainer = () => {
  return (
    <Layout>
      <ListUser />
    </Layout>
  );
};
