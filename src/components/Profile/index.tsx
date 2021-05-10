import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated && user && (
        <div>
          {user.picture && (
            <img src={user.picture} width="30px" alt={user.name} />
          )}
          {user.name}
        </div>
      )}
    </>
  );
}

export default Profile;
