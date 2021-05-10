import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Signup() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
      {!isAuthenticated && (
        <button
          onClick={() =>
            loginWithRedirect({
              screen_hint: "signup",
            })
          }
        >
          sign up
        </button>
      )}
    </>
  );
}

export default Signup;
