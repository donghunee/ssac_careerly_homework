import React from "react";
import styled from "styled-components";

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

function ReferenceComponent() {
  return (
    <>
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
    </>
  );
}

export default ReferenceComponent;
