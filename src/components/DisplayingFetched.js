import React from "react";
import { useSelector } from "react-redux";

const DisplayingFetched = () => {
  const userData = useSelector((state) => state.fetchUsers);
  // console.log(userData);

  return (
    <div>
      {userData &&
        userData.map((user) => {
          return (
            <>
              <div>{user.name}</div>
              <div>{user.email}</div>
            </>
          );
        })}
    </div>
  );
};

export default DisplayingFetched;
