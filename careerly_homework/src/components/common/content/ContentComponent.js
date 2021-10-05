import React from "react";
import styled from "styled-components";

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

function ContentComponent() {
  return (
    <>
      <ContentWrap>
        <ContentParagraph>
          🥲MZ 세대가 퇴사하는 이유
          <br />
          <br />- 핵심인재는 성장욕구가 강하다 . 현재 조직에서 수적으로 가장 큰
          비중을 차지하는 건 MZ세대. 기업의 60% 이상을 차지할 정도로 가장 많은
          세력이고 대한민국 전체 인구의 약 33%를 차지하고 있음. ...{" "}
          <ReadMore>더 보기</ReadMore>
        </ContentParagraph>
      </ContentWrap>
    </>
  );
}

export default ContentComponent;
