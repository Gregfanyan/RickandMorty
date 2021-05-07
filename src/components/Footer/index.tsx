import React from "react";
import * as S from "./styles";

const Name = "Grigor Fanyan";

function Footer() {
  return (
    <S.Footer>
      <S.Title>
        <i className="fas fa-copyright"> Developed By {Name}</i>
      </S.Title>
    </S.Footer>
  );
}

export default Footer;
