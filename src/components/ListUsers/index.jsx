import React, { useEffect, useState } from "react";
import Layout from "../../Layout";
import { UserBox } from "./UserBox";

const ListUser = props => {
  const [users, setUsers] = useState(null);

  const loadUsers = async () => {
    try {
      const data = await fetch("http://careers.picpay.com/tests/mobdev/users");
      const dataUsers = await data.json();
      setUsers(dataUsers);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="section--users">
      {users ? users.map(user => <UserBox user={user} key={user.id} />) : null}
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
