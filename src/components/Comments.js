import styled from "styled-components";
import { useState, useEffect } from "react";
import { postKomentar, getKomentar } from "../services/request";
import Comment from "./Comment";
import gambarProfilePic from "../images/profile-pic.png";

const DivKontainer = styled.div`
  margin-top: 10px;
`;
const DivUserProfile = styled.div`
  display: flex;
  align-items: center;
`;

const ImgUserProfile = styled.img`
  width: 35px;
  border-radius: 50%;
  margin-right: 10px;
`;

const InputKomen = styled.input`
  width: 100%;
  height: 30px;
  resize: none;
  background: #efefef;
  border-radius: 10px;
  padding: 5px;
  border: none;
  outline: 0;
`;

const FormKomen = styled.form`
  width: 100%;
`;

const Comments = ({ post }) => {
  const [daftar, setDaftar] = useState([]);
  const [isiPost, setIsiPost] = useState("");
  // const [idPost, setIdiPost] = useState("");

  useEffect(() => {
    tampil();
  }, []);

  const tampil = () => {
    getKomentar(post.id).then((response) => setDaftar(response.data));
  };

  const onSubmitKomentar = (e) => {
    e.preventDefault();
    const komenData = { isi: isiPost, post_id: post.id };
    postKomentar(komenData).then(() => tampil());
    setIsiPost("");
  };

  return (
    <DivKontainer>
      <DivUserProfile>
        <ImgUserProfile src={gambarProfilePic} />
        <FormKomen onSubmit={onSubmitKomentar}>
          <InputKomen
            placeholder="Tulis Komentar Anda"
            value={isiPost}
            onChange={(e) => setIsiPost(e.target.value)}
          />
        </FormKomen>
      </DivUserProfile>
      {daftar.map((komen) => {
        return <Comment key={komen.id} komen={komen} />
      })}
      
    </DivKontainer>
  );
};
export default Comments;
