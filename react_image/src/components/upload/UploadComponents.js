import React from "react";
import styled from "styled-components";

const PreviewImg = styled.img`
  width: 200px;
  height: auto;
`;

const FileInput = styled.input`
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  font-size: 20px;
  font-weight: bolder;
`;

function UploadComponents({
  onChangeImg,
  fileUrl,
  gender,
  onChangeGender,
  title,
  onChangeTitle,
  onSubmitMembership,
}) {
  return (
    <>
      <PreviewImg src={fileUrl} />
      <br />
      <FileInput type="file" onChange={onChangeImg} />
      <br />
      <StyledLabel>Gender</StyledLabel>
      <br />
      <select value={gender} onChange={onChangeGender}>
        <option value={0}>여자</option>
        <option value={1}>남자</option>
      </select>
      <br />
      <StyledLabel>Title</StyledLabel>
      <br />
      <input type="text" value={title} onChange={onChangeTitle} />
      <br />
      {/* 보통은 button 사용, input도 가능하다 */}
      <input type="submit" value="제출" onClick={onSubmitMembership} />
    </>
  );
}

export default UploadComponents;
