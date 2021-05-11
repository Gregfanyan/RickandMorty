import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { UserButton } from "../../pages/Header/styles";

function Signup() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
      {!isAuthenticated && (
        <UserButton
          onClick={() =>
            loginWithRedirect({
              screen_hint: "signup",
            })
          }
        >
          sign up
        </UserButton>
      )}
    </>
  );
}

export default Signup;
