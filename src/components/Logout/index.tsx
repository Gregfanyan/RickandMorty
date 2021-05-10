import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Logout() {
  const { logout, isAuthenticated } = useAuth0();

  return (
    <>{isAuthenticated && <button onClick={() => logout()}>logout</button>}</>
  );
}

export default Logout;
