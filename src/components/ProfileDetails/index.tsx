import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import * as S from "../SingleCharacter/styles";

const Status = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 13px;
  align-self: center;
  width: 80px;
  padding: 5px;
  background: rgba(76, 227, 100, 0.5);
`;

function ProfileDetails() {
  const { user, isAuthenticated } = useAuth0();
  const history = useHistory();

  console.log(user);

  function handleClick() {
    if (!history) {
      return <div>No Character</div>;
    } else {
      history.push("/");
    }
  }

  return (
    <>
      {isAuthenticated && user && (
        <S.Wrapper>
          <S.ReturnButton onClick={handleClick}>
            <i className="fas fa-long-arrow-alt-left fa-3x"></i>
          </S.ReturnButton>
          <S.Section>
            <S.ProfilePicture src={user.picture} alt={user.name} />

            <Status>User</Status>
            <S.Name>{user.name}</S.Name>
            <span>Email: {user.email}</span>
          </S.Section>
        </S.Wrapper>
      )}
    </>
  );
}

export default ProfileDetails;
