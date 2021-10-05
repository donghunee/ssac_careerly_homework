import React from "react";
import styled from "styled-components";

const Footer = styled.div`
  width: 57.4rem;
  height: 4.4rem;
  display: flex;
  /* border: solid 1px #dfdfdf; */
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: auto;
  max-width: 57.4rem;
  box-sizing: border-box;
`;

const FooterFrontWrap = styled.div`
  display: flex;
  line-height: 2rem;
  padding: 0 1.6rem;
`;

const FooterSCWrap = styled.div`
  display: flex;
`;

const FooterStyled = styled.div`
  display: flex;
  height: 100%;
  padding: 1.2rem 1.6rem;
  line-height: 2rem;
  box-sizing: border-box;
  color: #333333;
`;

const FooterImg = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
`;

const FooterText = styled.div`
  height: 2rem;
  font-size: 1.2rem;
  margin-right: 0.3rem;
`;

const FooterNum = styled.div`
  font-size: 1.2rem;
  font-weight: bolder;
`;

const FooterSplite = styled.div`
  width: 0.0625rem;
  height: 1rem;
  background: #dbdbdb;
  margin: 1.6rem 0;
`;

function FooterComponent() {
  return (
    <>
      <Footer>
        <FooterContainer>
          <FooterFrontWrap>
            <FooterImg
              src={
                "https://careerly.co.kr/_next/static/images/icn_bulb_line_teal-400_20-5bd11236c0f7f1e75452e7ea98523505.png"
              }
            />
            <FooterText>추천해요</FooterText>
          </FooterFrontWrap>

          <FooterSCWrap>
            <FooterStyled>
              <FooterImg
                src={
                  "https://careerly.co.kr/_next/static/images/icn_share_line_teal-400_20-0e80c7fa3b61aef1833979eaad8df0a1.png"
                }
              />
              <FooterText>공유하기</FooterText>
              <FooterNum>99</FooterNum>
            </FooterStyled>

            <FooterSplite></FooterSplite>
            <FooterStyled>
              <FooterImg
                src={
                  "https://careerly.co.kr/_next/static/images/icn_chat_line_teal-400_20-93d3e378c1623aa5fee3da15583f6aa6.png"
                }
              />
              <FooterText>댓글</FooterText>
              <FooterNum>7</FooterNum>
            </FooterStyled>
          </FooterSCWrap>
        </FooterContainer>
      </Footer>
    </>
  );
}

export default FooterComponent;
