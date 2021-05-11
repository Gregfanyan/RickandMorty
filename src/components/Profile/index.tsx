import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const UserImage = styled.img`
  display: flex;
  align-items: center;
  margin-left: 10px;
  border-radius: 50%;
`;

function Profile() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated && user && (
        <div>
          {user.picture && (
            <UserImage
              src={user.picture}
              width="40px"
              height="40px"
              alt={user.name}
            />
          )}
        </div>
      )}
    </>
  );
}

export default Profile;
