import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import NavbarComponent from "../../../components/common/navbar/NavbarComponent";

const baseURL = "http://localhost:3000";

function NavbarContainer({ isLoggined, setIsLoggined }) {
  const history = useHistory();

  const [searchState, setSearchState] = useState(false);

  const [searchInfo, setSearchInfo] = useState({
    search: "",
  });

  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    if (searchInfo.search.length > 0) {
      // 타이핑 하고 있다.
      setSearchState(true);
    } else {
      // 입력값이 없다면
      setSearchState(false);
    }
  }, [searchInfo]);

  const onClickAutoComplete = (text) => {
    const originText = text[0].replace("<em>", "").replace("</em>", "");
    setSearchInfo({
      ...searchInfo,
      search: originText,
    });
  };

  const onChangeInput = async (e) => {
    // 검색어 입력
    const { name, value } = e.target;
    setSearchInfo({
      ...searchInfo,
      [name]: value,
    });

    try {
      const result = await axios({
        // url: `${baseURL}/ssac/search?q=${value}`,
        url: `${baseURL}/ssac/search`,
        params: { q: value },
        method: "GET",
      });
      if (result.status === 200) {
        const elsData = result.data.data;
        console.log(elsData);
        setSearchData(elsData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onClickSearch = () => {};

  const onClickSignout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggined(false);
    console.log("로그아웃 성공");
    history.push("/");
  };
  return (
    <NavbarComponent
      onClickAutoComplete={onClickAutoComplete}
      searchData={searchData}
      searchState={searchState}
      searchInfo={searchInfo}
      onChangeInput={onChangeInput}
      isLoggined={isLoggined}
      onClickSignout={onClickSignout}
      onClickSearch={onClickSearch}
    />
  );
}

export default NavbarContainer;
