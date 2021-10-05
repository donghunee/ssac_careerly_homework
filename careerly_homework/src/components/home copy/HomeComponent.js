import React from "react";
import styled from "styled-components";

const HomeBackground = styled.div``;

const BorderBox = styled.div`
  height: 40.3rem;
  width: 57.6rem;
  border: 1px solid #dbdbdb;
  background: #ffffff;
  box-sizing: border-box;

  & + & {
    margin-bottom: 1.2rem;
  }
`;

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

const ContentWrap = styled.div`
  width: 54.2rem;
  height: 12.5rem;
  margin: 0 1.6rem 1rem 1.6rem;
  font-size: 1.4rem;
  box-sizing: border-box;
  /* border: 1px solid #dfdfdf; */
`;

const ContentParagraph = styled.p`
  color: #333333;
  line-height: 1.8;
`;

const ReadMore = styled.span`
  color: #999999;
`;

const LinkWrap = styled.div`
  background-color: #f7f7f7;
  margin: 0 1.6rem 1.2rem;
  padding: 1.6em;
  width: 54.2rem;
  height: 11.2rem;
  border-radius: 0.5rem;
  box-sizing: border-box;
  display: flex;
  /* border: solid 1px #dfdfdf; */
`;

const LinkTextWrap = styled.div`
  height: 8rem;
  margin-right: 1.6rem;
  /* border: solid 1px #dfdfdf; */
`;

const LinkTitleText = styled.div`
  font-size: 1.4rem;
  font-weight: 900;
  color: #333333;
  margin-bottom: 0.4rem;
  width: 40.5rem;
`;

const LinkSrcText = styled.div`
  font-size: 1.2rem;
  color: #999999;
  height: 1.8rem;
  line-height: 2rem;
`;

const LinkImg = styled.img`
  width: 8rem;
  height: 8rem;
`;

const ReferenceWrap = styled.div`
  width: 54.2rem;
  height: 2rem;
  margin: 0.8rem 1.6rem;
  align-items: center;
  display: flex;
  color: #333333;
  box-sizing: border-box;
  /* border: solid 1px #dfdfdf; */
`;
const ReferenceImgWrap = styled.div`
  width: 5.5rem;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  align-items: center;
  /* border: solid 1px #dfdfdf; */
`;

const ReferenceImgWrap1 = styled.div`
  position: absolute;
  left: 3rem;
  /* background-color: red; */
`;
const ReferenceImgWrap2 = styled.div`
  position: absolute;
  overflow: hidden;
  left: 1.5rem;
  /* background-color: blue; */
`;

const ReferenceImgWrap3 = styled.div`
  position: absolute;
  overflow: hidden;
  left: 0rem;
  /* background-color: green; */
`;

const ReferenceImg = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  object-fit: cover;
  border: solid 1px white;
  border-radius: 10rem;
`;

const ReferenceText = styled.div`
  width: auto;
  font-size: 1.2rem;
`;

const ReferenceTextNum = styled.div`
  font-size: 1.2rem;
  font-weight: bolder;
`;

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

function HomeComponent() {
  return (
    <>
      <HomeBackground>
        <BorderBox>
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
          <ContentWrap>
            <ContentParagraph>
              🥲MZ 세대가 퇴사하는 이유
              <br />
              <br />- 핵심인재는 성장욕구가 강하다 . 현재 조직에서 수적으로 가장
              큰 비중을 차지하는 건 MZ세대. 기업의 60% 이상을 차지할 정도로 가장
              많은 세력이고 대한민국 전체 인구의 약 33%를 차지하고 있음. ...{" "}
              <ReadMore>더 보기</ReadMore>
            </ContentParagraph>
          </ContentWrap>
          <LinkWrap>
            <LinkTextWrap>
              <LinkTitleText>
                [풀버전] 퇴사하는 MZ, 그들은 왜 떠나는가 | EBS 비즈니스 리뷰
                김나이 편
              </LinkTitleText>
              <LinkSrcText>YouTube</LinkSrcText>
            </LinkTextWrap>
            <LinkImg src={"https://i.ytimg.com/vi/RLO4goMgqCM/hqdefault.jpg"} />
          </LinkWrap>
          <ReferenceWrap>
            <ReferenceImgWrap>
              <ReferenceImgWrap1>
                <ReferenceImg
                  src={
                    "https://careerly.co.kr/_next/static/images/img_profile-dummy-9e28d259cbf9e126af9c467a4bf0884f.png"
                  }
                />
              </ReferenceImgWrap1>
              <ReferenceImgWrap2>
                <ReferenceImg
                  src={
                    "https://careerly.co.kr/_next/static/images/img_profile-dummy-9e28d259cbf9e126af9c467a4bf0884f.png"
                  }
                />
              </ReferenceImgWrap2>
              <ReferenceImgWrap3>
                <ReferenceImg
                  src={
                    "https://careerly.co.kr/_next/static/images/img_profile-dummy-9e28d259cbf9e126af9c467a4bf0884f.png"
                  }
                />
              </ReferenceImgWrap3>
            </ReferenceImgWrap>
            <ReferenceTextNum>236명</ReferenceTextNum>
            <ReferenceText>이 추천했어요.</ReferenceText>
          </ReferenceWrap>

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
        </BorderBox>
      </HomeBackground>
    </>
  );
}

export default HomeComponent;
