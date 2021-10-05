import React from "react";
import styled from "styled-components";
import ContentCompon from "../common/content/ContentComponent";
import FooterComponent from "../common/footer/FooterComponent";
import HeaderComponent from "../common/header/HeaderComponent";
import LinkComponent from "../link/LinkComponent";
import ReferenceComponent from "../reference/ReferenceComponent";

const HomeBackground = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.2rem;
`;

const BorderBox = styled.div`
  height: 40.3rem;
  width: 57.6rem;
  border: 1px solid #dbdbdb;
  background: #ffffff;
  box-sizing: border-box;
  margin: 0 16.2rem;
`;

function HomeComponent() {
  return (
    <>
      <HomeBackground>
        <BorderBox>
          <HeaderComponent />
          <ContentCompon />
          <LinkComponent />
          <ReferenceComponent />
          <FooterComponent />
        </BorderBox>
      </HomeBackground>
    </>
  );
}

export default HomeComponent;
