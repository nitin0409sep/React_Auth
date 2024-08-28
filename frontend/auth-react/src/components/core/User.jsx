import React from "react";
import { getUserData } from "../../customhooks/useLocalstorage";

const User = () => {
  const userToken = getUserData();

  return <div>User - {userToken} </div>;
};

export default User;
