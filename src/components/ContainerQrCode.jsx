import React from "react";
import styled from "styled-components";
import qrCode from "../assets/qr.svg";

const BgStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImgCodeContainer = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20rem;
  height: 34rem;
  background-color: brown;
`;
const ImgCode = styled.img`
  border: solid 1px black;
  width: 10rem;
`;
const Titulo = styled.h1``;
const SubTitulo = styled.h2``;
const ContainerQrCode = () => {
  return (
    <div>
      <BgStyle>
        <ImgCodeContainer>
          <ImgCode src={qrCode} />
          <Titulo></Titulo>
          <SubTitulo></SubTitulo>
        </ImgCodeContainer>
      </BgStyle>
    </div>
  );
};

export default ContainerQrCode;
