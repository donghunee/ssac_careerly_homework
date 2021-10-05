import React from "react";
import styled from "styled-components";

const HeaderWrap = styled.div`
  width: 54.2rem;
  height: 4rem;
  margin: 1.6rem 1.6rem 1.2rem;
  display: flex;
  line-height: 1.5;
  /* border: 1px solid #dbdbdb; */
`;

const HeaderIcon = styled.img`
  width: 3.8rem;
  height: 3.8rem;
  margin-right: 1.6rem;
  border-radius: 10rem;
  border: solid 1px #dfdfdf;
`;

const HeaderTextWrap = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 2.1rem;
`;

const HeaderTextName = styled.div`
  font-size: 1.4rem;
  font-weight: bolder;
  margin-right: 0.8rem;
`;

const HeaderTextPosition = styled.div`
  font-size: 1.4rem;
  color: #999999;
`;

const HeaderTextColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderTextDate = styled.div`
  font-size: 1.2rem;
  color: #999999;
  height: 1.8rem;
  align-items: flex-end;
`;

function HeaderComponent() {
  return (
    <>
      <HeaderWrap>
        <HeaderIcon
          src={
            "https://publy.imgix.net/user-uploaded/330478/2021.08/20210805020055.png?w=200&h=200"
          }
        />
        <HeaderTextColumn>
          <HeaderTextWrap>
            <HeaderTextName>김수현</HeaderTextName>
            <HeaderTextPosition>SSAC/React 과제 중</HeaderTextPosition>
          </HeaderTextWrap>
          <HeaderTextDate>하루 전</HeaderTextDate>
        </HeaderTextColumn>
      </HeaderWrap>
    </>
  );
}

export default HeaderComponent;
