import React, { useState } from "react";
import SignInComponent from "../../components/auth/SignInComponent";
import axios from "axios";
import { useHistory } from "react-router-dom";

const baseURL = "http://localhost:3000";

function SignInContainer({ setIsLoggined }) {
  const history = useHistory();

  const [userInfo, setUserInfo] = useState({
    userId: "",
    password: "",
  });

  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };
  const onSubmit = async () => {
    try {
      const result = await axios({
        url: `${baseURL}/ssac/auth/signin`,
        method: "POST",
        data: userInfo,
      });
      if (result.status === 200) {
        console.log("로그인 성공");
        const accessToken = result.data.accessToken;
        localStorage.setItem("accessToken", accessToken);
        setIsLoggined(true);
        history.push("/");
      }
    } catch (error) {
      const errorStatus = error.response.status;
      if (errorStatus === 409) {
        alert("로그인에 실패했습니다.");
      } else {
        alert("서버 에러가 발생했습니다.");
      }
    }
  };

  return (
    <SignInComponent
      userInfo={userInfo}
      onChangeInput={onChangeInput}
      onSubmit={onSubmit}
    />
  );
}

export default SignInContainer;
