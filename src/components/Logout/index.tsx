import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { UserButton } from "../../pages/Header/styles";

function Logout() {
  const { logout, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated && (
        <UserButton
          onClick={() =>
            logout({
              returnTo: window.location.origin,
            })
          }
        >
          logout
        </UserButton>
      )}
    </>
  );
}

export default Logout;
