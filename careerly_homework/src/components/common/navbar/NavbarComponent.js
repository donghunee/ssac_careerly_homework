import React from "react";
import styled from "styled-components";
import {
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineComment,
} from "react-icons/ai";

const NavbarWrap = styled.div`
  height: 6rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 100%;
  background: #ffffff;
`;

const NavContainer = styled.div`
  max-width: 99.6rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 0 0.8rem;
`;

const NavFrontWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  & + & {
    margin-right: 1.5rem;
  }
`;

const NavLogo = styled.img`
  width: 9.4rem;
  height: 2.4rem;
  margin-right: 1.5rem;
  padding: 0.8rem;
`;

const NavStyledLink = styled.div`
  font-size: 1.4rem;
  font-weight: normal;
  text-decoration: none;
  color: #555555;
  margin-right: 0.4rem;
  padding: 0.8rem;
`;

const NavProfileWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavIconsWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  color: #333333;
`;

const NavStyledIcon = styled.div`
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  padding: 0.8rem;
  & + & {
    margin-right: 0.4rem;
  }
`;

const NavProfileImg = styled.img`
  width: 3.4rem;
  height: 3.4rem;
  padding: 0.8rem;
`;

function NavbarComponent() {
  return (
    <>
      <NavbarWrap>
        <NavContainer>
          <NavFrontWrap>
            <NavLogo
              src={
                "https://careerly.co.kr/_next/static/images/img-logo-789fb5a9000960c8e86ed6e1a0f54a2f.png"
              }
            />
            <NavStyledLink>프로필 탐색</NavStyledLink>
            <NavStyledLink>인턴 채용공고</NavStyledLink>
          </NavFrontWrap>
          <NavProfileWrap>
            <NavIconsWrap>
              <NavStyledIcon>
                <AiOutlineSearch />
              </NavStyledIcon>
              <NavStyledIcon>
                <AiOutlineComment />
              </NavStyledIcon>
              <NavStyledIcon>
                <AiOutlineBell />
              </NavStyledIcon>
              <NavProfileImg
                src={
                  "https://careerly.co.kr/_next/static/images/img_profile-dummy-9e28d259cbf9e126af9c467a4bf0884f.png"
                }
              />
            </NavIconsWrap>
          </NavProfileWrap>
        </NavContainer>
      </NavbarWrap>
    </>
  );
}

export default NavbarComponent;
