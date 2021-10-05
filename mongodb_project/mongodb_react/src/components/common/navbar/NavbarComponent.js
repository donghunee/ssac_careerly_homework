import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineComment,
} from "react-icons/ai";

const NavbarWrap = styled.div`
  height: 6rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  position: fixed;
  width: 100%;
  background: #ffffff;
`;

const NavContainer = styled.div`
  max-width: 99.6rem;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavFrontWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavLogo = styled.div`
  font-size: 2rem;
  font-weight: bolder;
`;

const NavLinkWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 3rem;
`;

const NavStyledLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: normal;
  text-decoration: none;
  color: #000000;
  margin-right: 1rem;
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
`;

const NavStyledIcon = styled.div`
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  // 인접한 것을 띄울 때
  & + & {
    margin-left: 1rem;
  }
`;

const NavProfileImg = styled.img`
  width: 3.4rem;
  height: 3.4rem;
  margin-left: 3rem;
`;

const NavSignout = styled.div`
  font-size: 1.5rem;
  font-weight: normal;
  text-decoration: none;
  color: #000000;
  margin-right: 1rem;
  cursor: pointer;
`;

const NavSearchRoundBox = styled.div`
  border: 1px solid black;
  padding: 0.2rem 0.5rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
`;

const NavSearchInput = styled.input`
  flex: 1;
  border: none;
  width: 13rem;

  &:focus {
    outline: none;
  }
`;

const SearchInputWrap = styled.div`
  position: relative;
  margin-right: 1rem;
`;

const SearchBoard = styled.div`
  width: 100%;
  height: 15rem;
  position: absolute;
  top: 3.5rem;
  box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #dedede;
  background: #ffffff;
`;

const SearchItemWrap = styled.div`
  padding: 1rem;
  cursor: pointer;

  & + & {
    border-top: 1px solid #dedede;
  }
`;

const SearchItemTitle = styled.div`
  font-size: 1.3rem;
  font-weight: normal;
`;

function NavbarComponent({
  isLoggined,
  onClickSignout,
  onChangeInput,
  searchInfo,
  searchState,
  searchData,
  onClickAutoComplete,
  onClickSearch,
}) {
  return (
    <>
      <NavbarWrap>
        <NavContainer>
          <NavFrontWrap>
            <NavLogo>ssac</NavLogo>
            <NavLinkWrap>
              {!isLoggined ? (
                <>
                  <NavStyledLink to="/signin">로그인</NavStyledLink>
                  <NavStyledLink to="/signup">회원가입</NavStyledLink>
                </>
              ) : (
                <>
                  <NavStyledLink to="/write">글쓰기</NavStyledLink>
                  <NavSignout onClick={onClickSignout}>로그아웃</NavSignout>
                </>
              )}
            </NavLinkWrap>
          </NavFrontWrap>
          <NavProfileWrap>
            <NavIconsWrap>
              <SearchInputWrap>
                <NavSearchRoundBox>
                  <NavSearchInput
                    name="search"
                    value={searchInfo.search}
                    onChange={onChangeInput}
                  />
                  <NavStyledIcon>
                    <AiOutlineSearch />
                  </NavStyledIcon>
                </NavSearchRoundBox>
                {searchState ? (
                  <>
                    <SearchBoard>
                      {searchData.map((item, idx) => (
                        <SearchItemWrap
                          key={idx}
                          onClick={() => onClickAutoComplete(item.title)}
                        >
                          {/* 매개변수가 있으면 화살표 함수를 써주어야 한다. */}
                          <SearchItemTitle
                            dangerouslySetInnerHTML={{ __html: item.title }}
                          ></SearchItemTitle>
                        </SearchItemWrap>
                      ))}
                    </SearchBoard>
                  </>
                ) : (
                  <></>
                )}
              </SearchInputWrap>
              <NavStyledIcon>
                <AiOutlineComment />
              </NavStyledIcon>
              <NavStyledIcon>
                <AiOutlineBell />
              </NavStyledIcon>
            </NavIconsWrap>
            <NavProfileImg
              src={
                "https://careerly.co.kr/_next/static/images/img_profile-dummy-9e28d259cbf9e126af9c467a4bf0884f.png"
              }
            />
          </NavProfileWrap>
        </NavContainer>
      </NavbarWrap>
    </>
  );
}

export default NavbarComponent;
