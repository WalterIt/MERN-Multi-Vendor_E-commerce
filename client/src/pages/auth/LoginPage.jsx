import React from "react";
import Login from "../../components/auth/Login";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
