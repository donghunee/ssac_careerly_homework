import React, { useState } from "react";
import UploadComponents from "../../components/upload/UploadComponents";
import axios from "axios";
import { useHistory } from "react-router-dom";

function UploadContainer() {
  const history = useHistory();

  const baseURL = "http://localhost:3000";
  const [fileUrl, setFileUrl] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [gender, setGender] = useState(0);
  const [title, setTitle] = useState("");

  const onChangeTitle = (event) => {
    const { value } = event.target;
    console.log(value);
    setTitle(value);
  };

  const onChangeImg = async (event) => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setFileUrl(imageUrl);

    const formData = new FormData();
    formData.append("img", imageFile);

    const response = await axios({
      method: "POST",
      url: `${baseURL}/membership/images`,
      header: { "Content-type": "multipart/form-data" },
      data: formData,
    });

    const result = response.data;
    setImgUrl(result.imgUrl);
    console.log(result);
  };

  const onSubmitMembership = async () => {
    console.log(imgUrl);
    const response = await axios({
      method: "POST",
      url: `${baseURL}/membership`,
      header: { "Content-type": "multipart.form-data" },
      data: { gender, title, img: imgUrl },
    });
    if (response.status === 200) {
      const result = response.data;
      const resultImgUrl = result.imgUrl;
      setImgUrl(resultImgUrl);
      console.log("업로드 완료");
      history.push("/");
    } else {
      console.log("업로드 실패");
    }
  };

  const onChangeGender = (event) => {
    const { value } = event.target;
    console.log(value);
    setGender(value);
  };

  return (
    <UploadComponents
      onChangeImg={onChangeImg}
      fileUrl={fileUrl}
      gender={gender}
      onChangeGender={onChangeGender}
      title={title}
      onChangeTitle={onChangeTitle}
      onSubmitMembership={onSubmitMembership}
    />
  );
}

export default UploadContainer;
