import React from "react";
import styled from "styled-components";
import qrCode from "../assets/qr.svg";

const Card = styled.div`
  width: 17rem;
  height: 30rem;
  padding: 1.2rem;
  border-radius: 5%;
  background-color: #d8f3dc;
  box-shadow: 10px 30px 15px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 667px) {
    flex-direction: row;
    justify-content: space-around;
    width: 30rem;
    height: 10rem;
    border-radius: 0.5rem;
  }
  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
    width: 20rem;
    height: 30rem;
    border-radius: 1%;
  }
  @media (min-width: 1024px) {
    flex-direction: column;
    justify-content: space-around;
    width: 20rem;
    height: 30rem;
    border-radius: 3%;
  }
`;
const ContainerCode = styled.div`
  width: 17rem;
  height: 17rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b7e4c7;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
  @media (min-width: 667px) {
    width: 10rem;
    height: 10rem;
    background-color: transparent;
  }
  @media (min-width: 734px) {
    width: 10rem;
    height: 5rem;
    background-color: #b7e4c7;
  }
  @media (min-width: 768px) {
    width: 15rem;
    height: 15rem;
  }
  @media (min-width: 1024px) {
    width: 17rem;
    height: 17rem;
  }
`;
const QrCode = styled.img`
  width: 10rem;
  height: 10rem;
  border: 1px solid #86edbb37;
  border-radius: 1rem;
  @media (min-width: 768px) {
    width: 10rem;
    height: 10rem;
  }
`;
const TextContainer = styled.div`
  @media (min-width: 667px) {
    margin-left: 15px;
  }
`;
const Title = styled.h1`
  margin-top: 30px;
  font-size: 16px;
  text-align: center;
  font-family: "Outfit";
  color: #081c15;
`;
const Subtitle = styled.h2`
  font-size: 14px;
  text-align: center;
  font-family: "Outfit";
  color: #3a574b;
  font-weight: 300;
`;
const ContainerQrCode = () => {
  return (
    <div>
      <Card>
        <ContainerCode>
          <QrCode src={qrCode} />
        </ContainerCode>
        <TextContainer>
          <Title>Visit my personal website to see my projects</Title>
          <Subtitle>
            Scan this QR code to visit my website and follow my work. This
            project is a Frontend Mentor challenge.
          </Subtitle>
        </TextContainer>
      </Card>
    </div>
  );
};

export default ContainerQrCode;
