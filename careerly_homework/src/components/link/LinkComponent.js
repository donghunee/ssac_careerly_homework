import React from "react";
import styled from "styled-components";

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

function LinkComponent() {
  return (
    <>
      <LinkWrap>
        <LinkTextWrap>
          <LinkTitleText>
            [풀버전] 퇴사하는 MZ, 그들은 왜 떠나는가 | EBS 비즈니스 리뷰 김나이
            편
          </LinkTitleText>
          <LinkSrcText>YouTube</LinkSrcText>
        </LinkTextWrap>
        <LinkImg src={"https://i.ytimg.com/vi/RLO4goMgqCM/hqdefault.jpg"} />
      </LinkWrap>
    </>
  );
}

export default LinkComponent;
