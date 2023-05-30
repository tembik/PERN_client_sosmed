import { useState, useEffect } from "react";
import { postPost } from "../services/request";
import gambarProfilePic from "../images/profile-pic.png";
import gambarLiveVIdeo from "../images/live-video.png";
import gambarPhoto from "../images/photo.png";
import gambarFeeling from "../images/feeling.png";
// import gambarPreview from "../images/zzzz.png";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import styled from "styled-components";

const DivWritePost = styled.div`
  width: 100%;
  background: #fff;
  /* background: var(--bg-color); */
  border-radius: 6px;
  padding: 20px;
  color: #626262;
`;

const DivUserProfile = styled.div`
  display: flex;
  align-items: center;
`;

const ImgUserProfile = styled.img`
  width: 45px;
  border-radius: 50%;
  margin-right: 10px;
`;

const PText = styled.p`
  margin-bottom: -5px;
  font-weight: 500;
  color: #626262;
`;

const SmallText = styled.small`
  font-size: 12px;
`;

const DivPostInput = styled.div`
  padding-left: 55px;
  padding-top: 20px;
`;

const TextareaPost = styled.textarea`
  width: 100%;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #ccc;
  background: transparent;
  resize: none;
`;

const DivAddPostLink = styled.div`
  display: flex;
  margin-top: 10px;
`;

const AaddPostLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #626262;
  margin-right: 30px;
  font-size: 13px;
`;

const ImgAddPostLink = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const ButtonPost = styled.button`
  cursor: pointer;
  margin: auto;
  padding: 4px 5px;
  background: #1876f2;
  border-radius: 4px;
  color: #fff;
  /* border: 1px solid #9a9a9a; */
  border: none;
`;

const LabelFile = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #626262;
  margin-right: 30px;
  font-size: 13px;
`;

const InputFile = styled.input`
  display: none;
`;

const ImgPreview = styled.img`
  object-fit: cover;
  width: 100%;
  margin-top: 10px;
`;

const WritePost = ({ postUser, handleChange, handleGambar, handleSubmit }) => {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (postUser.gambar) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(postUser.gambar);
    } else {
      setPreview(null);
    }
  }, [postUser.gambar]);
  // const [isi, setIsi] = useState("");
  // const [gambar, setGambar] = useState(null);

  // const onClickPost = () => {
  //   const formData = new FormData();
  //   formData.append("isi", isi);
  //   formData.append("image", gambar);
  //   postPost(formData).then(() => tampil());
  //   setIsi("");
  //   setGambar(null);
  // };

  const { user } = useContext(AuthContext);
  return (
    <DivWritePost>
      <DivUserProfile>
        <ImgUserProfile src={gambarProfilePic} />
        <div>
          {user && <PText>{user.username}</PText>}
          <SmallText>
            Public <i className="fa-solid fa-caret-down"></i>
          </SmallText>
        </div>
      </DivUserProfile>
      <DivPostInput>
        <TextareaPost
          rows="3"
          placeholder="What's on your mind, John?"
          value={postUser.isi}
          name="isi"
          onChange={handleChange}
        ></TextareaPost>
        {/* <ImgPreview src={gambarPreview} /> */}
        {preview && <ImgPreview src={preview} />}
        <DivAddPostLink>
          <AaddPostLink href="#">
            <ImgAddPostLink src={gambarLiveVIdeo} /> Live Video
          </AaddPostLink>
          <LabelFile htmlFor="coba">
            <ImgAddPostLink src={gambarPhoto} /> Photo/Video
            <InputFile
              id="coba"
              type="file"
              name="gambar"
              onChange={handleGambar}
              onClick={(e) => {
                e.target.value = null;
              }}
            />
          </LabelFile>
          <AaddPostLink href="#">
            <ImgAddPostLink src={gambarFeeling} /> Feeling/Activity
          </AaddPostLink>
          <ButtonPost onClick={handleSubmit}>submit</ButtonPost>
        </DivAddPostLink>
      </DivPostInput>
    </DivWritePost>
  );
};
export default WritePost;
