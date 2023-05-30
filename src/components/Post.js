import { useState, useContext } from "react";
import Comments from "./Comments";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { deletePost } from "../services/request";
import gambarProfilePic from "../images/profile-pic.png";
import gambarPost from "../images/feed-image-1.png";
import gambarLike from "../images/like-blue.png";
import gambarComments from "../images/comments.png";
import gambarShare from "../images/share.png";
import styled from "styled-components";

const DivPostKontainer = styled.div`
  width: 100%;
  background: #fff;
  /* background: var(--bg-color); */
  border-radius: 6px;
  padding: 20px;
  color: #626262;
  margin: 20px 0;
`;

const DivPostRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonPostRow = styled.button`
  padding-left: 10px;
  color: #9a9a9a;
  cursor: pointer;
  border: none;
  background: #fff;
`;

// const AUser = styled.a`
//   color: #9a9a9a;
//   font-size: 13px;
// `;

const LinkUsername = styled(Link)`
  font-weight: 500;
  color: #626262;
  text-decoration: none;
  display: block;
`;

const LinkPost = styled(Link)`
  color: #9a9a9a;
  font-size: 13px;
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

// const SpanText = styled.span`
//   font-size: 13px;
//   color: #9a9a9a;
// `;

const PPostText = styled.p`
  color: #9a9a9a;
  margin: 15px 0;
  font-size: 15px;
`;

// const SpanPost = styled.span`
//   color: #626262;
//   font-weight: 500;
// `;

// const APost = styled.a`
//   color: #1876f2;
//   text-decoration: none;
// `;

const ImgPost = styled.img`
  width: 100%;
  border-radius: 4px;
  margin-bottom: 5px;
`;

const DivIcon = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 30px;
`;

const ImgIcon = styled.img`
  width: 18px;
  margin-right: 10px;
`;

const DivProfileIcon = styled.div`
  display: flex;
  align-items: center;
`;

const ImgProfileIcon = styled.img`
  width: 20px;
  border-radius: 50%;
  margin-right: 5px;
`;

const DivKotak = styled.div`
  position: absolute;
  margin-left: 420px;
  margin-top: 110px;
  /* top: 83%; */
  /* left: 63%; */
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  width: 100px;
  /* height: 150px; */
  border-radius: 10px;
  overflow: hidden;
`;

const DivKotakHide = styled.div`
  position: absolute;
  max-height: 0;
`;

const DivMenu = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 20px;
`;

// const AMenu = styled.a`
//   display: flex;
//   flex: 1;
//   align-items: center;
//   justify-content: space-between;
//   text-decoration: none;
//   color: #626262;
// `;

const LinkMenu = styled(Link)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: #626262;
`;

const ButtonMenu = styled.button`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: #626262;
  border: none;
  cursor: pointer;
  background: #fff;
  font-size: 15px;
`;

const ButtonKomen = styled.button`
  cursor: pointer;
  border: none;
  background: #fff;
`;

const DivKotakKomentar = styled.div`
  width: 100%;
  height: 300px;
  background: #fff;
  border: 0px solid black;
`;

const Post = ({ post, tampil }) => {
  const [kotak, setKotak] = useState(false);
  const [kotakKomentar, setKotakKomentar] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const hapus = (id) => {
    deletePost(id)
      .then(() => tampil())
      .catch((error) => {
        if (error.message) {
          navigate("/");
        }
      });
  };

  return (
    <>
      <DivPostKontainer>
        <DivPostRow>
          <DivUserProfile>
            <ImgUserProfile src={gambarProfilePic} />
            <div>
              {/* {post && <PText>{post.User.username}</PText>} */}
              {post && (
                <LinkUsername to={`/profile/${post.user_id}`}>
                  {post.username}
                </LinkUsername>
              )}
              {/* <SpanText>June 24 2021, 13:40 pm</SpanText> */}
              {/* <AUser href="#">June 24 2021, 13:40 pm</AUser> */}
              <LinkPost to={`/post/${post.id}`}>
                {new Date(post.created_at).toDateString()}
              </LinkPost>
            </div>
          </DivUserProfile>

          {user && user.id === post.user_id && (
            <ButtonPostRow onClick={() => setKotak(!kotak)}>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </ButtonPostRow>
          )}

          {kotak ? (
            <DivKotak>
              <DivMenu>
                <LinkMenu to={`/edit/${post.id}`}>edit</LinkMenu>
              </DivMenu>
              <DivMenu>
                <ButtonMenu onClick={() => hapus(post.id)}>hapus</ButtonMenu>
              </DivMenu>
            </DivKotak>
          ) : (
            <DivKotakHide></DivKotakHide>
          )}
        </DivPostRow>        
        <PPostText>{post.isi}</PPostText>
        {/* <ImgPost src={gambarPost} /> */}
        {post.gambar && (
          // <ImgPost src={`http://localhost:4000/${post.gambar}`} />
          <ImgPost src={post.gambar} />
        )}        

        <DivPostRow>
          <div>
            <DivIcon>
              <ImgIcon src={gambarLike} /> 120
            </DivIcon>
            <DivIcon>
              <ButtonKomen onClick={() => setKotakKomentar(!kotakKomentar)}>
                <ImgIcon src={gambarComments} />
              </ButtonKomen>
            </DivIcon>
            <DivIcon>
              <ImgIcon src={gambarShare} /> 20
            </DivIcon>
          </div>
          <DivProfileIcon>
            <ImgProfileIcon src={gambarProfilePic} />
            <i className="fa-solid fa-caret-down"></i>
          </DivProfileIcon>
        </DivPostRow>
        {kotakKomentar && <Comments post={post} />}
      </DivPostKontainer>
    </>
  );
};
export default Post;
