import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { UserButton } from "../../pages/Header/styles";

function Login() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
      {!isAuthenticated && (
        <UserButton onClick={() => loginWithRedirect()}>login</UserButton>
      )}
    </>
  );
}

export default Login;
