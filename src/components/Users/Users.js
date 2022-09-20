import React, { useEffect, useState } from "react";
import { fetchAPI } from "../utils/fetchAPI";

const Users = () => {
  //   const api = "https://jsonplaceholder.typicode.com/users?_limit=4";
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchAPI("https://jsonplaceholder.typicode.com/users?_limit=4")
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  let usersList = null;
  if (users && users.length > 0) {
    usersList = users.map((user) => {
      return (
        <div key={user.id}>
          <p>{user.id}</p>
          <p>{user.name}</p>
        </div>
      );
    });
  }

  return (
    <div>
      <h3>Users....{error ? "Sorry..!" : usersList}</h3>
    </div>
  );
};

export default Users;
