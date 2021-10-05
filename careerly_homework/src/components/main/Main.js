import React from "react";
import styled from "styled-components";
import HomeComponent from "../home/HomeComponent";

const HomeWarp = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

function Main() {
  return (
    <>
      <HomeWarp>
        <HomeComponent />
        <HomeComponent />
        <HomeComponent />
        <HomeComponent />
        <HomeComponent />
      </HomeWarp>
    </>
  );
}

export default Main;
