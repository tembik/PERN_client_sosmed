import { useState } from "react";
import WritePost from "./WritePost";
import Post from "./Post";
import { postPost } from "../services/request";
import styled from "styled-components";
import gambarFeeling from "../images/feeling.png";
import gambarProJob from "../images/profile-job.png";
import gambarProStudy from "../images/profile-study.png";
import gambarProHome from "../images/profile-home.png";
import gambarProLoc from "../images/profile-location.png";
import gambarphoto1 from "../images/pp5.jpg";
import gambarphoto2 from "../images/pp6.jpg";
import gambarphoto3 from "../images/pp7.jpg";
import gambarphoto4 from "../images/pp8.jpg";
import gambarphoto5 from "../images/pp9.jpg";
import gambarphoto6 from "../images/photo6.png";

import gambarMember1 from "../images/pp1.jpg";
import gambarMember2 from "../images/pp2.jpg";
import gambarMember3 from "../images/pp3.jpg";
import gambarMember4 from "../images/pp4.jpg";
import gambarMember5 from "../images/pp5.jpg";
import gambarMember6 from "../images/pp6.jpg";
import gambarMember7 from "../images/member-7.png";
import gambarMember8 from "../images/member-8.png";
import gambarMember9 from "../images/member-9.png";

const DivKontainer = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: space-between;
  margin-top: 20px;
`;

const DivInfoCol = styled.div`
  flex-basis: 33%;
`;

const DivProIntro = styled.div`
  /* background: var(--bg-color); */
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
`;

const H3ProIntro = styled.h3`
  font-weight: 600;
`;

const PIntroText = styled.p`
  text-align: center;
  margin: 10px 0;
  font-size: 15px;
`;

const ImgIntroText = styled.img`
  width: 15px;
  margin-bottom: -3px;
`;

const HrProIntro = styled.hr`
  border: 0;
  height: 1px;
  background: #ccc;
  margin: 24px 0;
`;

const PProIntro = styled.p`
  font-size: 14px;
`;

const LiProfileIntro = styled.li`
  list-style: none;
  font-size: 15px;
  margin: 15px 0;
  display: flex;
  align-items: center;
`;

const ImgProfileIntro = styled.img`
  width: 26px;
  margin-right: 10px;
`;

const DivTitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ATitleBox = styled.a`
  text-decoration: none;
  color: #1876f2;
  font-size: 14px;
`;

const DivPhotoBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 10px;
  margin-top: 15px;
`;

const ImgPhotoBox = styled.img`
  width: 100%;
  cursor: pointer;
`;

const DivFriendsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 10px;
  margin-top: 15px;
`;

const DivPosition = styled.div`
  position: relative;
`;

const ImgFriendsBox = styled.img`
  width: 100%;
  cursor: pointer;
  padding-bottom: 20px;
`;

const PFriendsBox = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 14px;
`;

const DivPostCol = styled.div`
  flex-basis: 65%;
`;

const ProfileInfo = ({ daftar, tampil }) => {
  const [postUser, setPostUser] = useState({
    isi: "",
    gambar: null,
  });

  const handleChange = (e) => {
    setPostUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleGambar = (e) => {
    setPostUser((prev) => {
      const file = e.target.files[0];
      if (file) return { ...prev, gambar: file };
      if (!file) return { ...prev, gambar: null };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("isi", postUser.isi);
    formData.append("image", postUser.gambar);
    postPost(formData).then(() => tampil());
    setPostUser((prev) => {
      return { ...prev, isi: "", gambar: null };
    });
  };

  // const [isi, setIsi] = useState("");
  // const [gambar, setGambar] = useState(null);

  // const onClickPost = () => {
  //   const formData = new FormData();
  //   formData.append("isi", isi);
  //   formData.append("gambar", gambar);
  //   postPost(formData).then(() => tampil());
  //   setIsi("");
  //   setGambar(null);
  // };

  return (
    <DivKontainer>
      <DivInfoCol>
        <DivProIntro>
          <H3ProIntro>Intro</H3ProIntro>
          <PIntroText>
            Believe in yourself and you can do unbelievable things.
            <ImgIntroText src={gambarFeeling} />
          </PIntroText>
          <HrProIntro />
          <ul>
            <LiProfileIntro>
              <ImgProfileIntro src={gambarProJob} /> Lyly Bakery
            </LiProfileIntro>

            <LiProfileIntro>
              <ImgProfileIntro src={gambarProStudy} /> Studied at Brawijaya
              University
            </LiProfileIntro>

            <LiProfileIntro>
              <ImgProfileIntro src={gambarProStudy} /> Went to Malang
            </LiProfileIntro>

            <LiProfileIntro>
              <ImgProfileIntro src={gambarProHome} /> Lives in Surabaya
            </LiProfileIntro>

            <LiProfileIntro>
              <ImgProfileIntro src={gambarProLoc} /> From Lamongan
            </LiProfileIntro>
          </ul>
        </DivProIntro>
        <DivProIntro>
          <DivTitleBox>
            <H3ProIntro>Photos</H3ProIntro>
            <ATitleBox href="#">All Photos</ATitleBox>
          </DivTitleBox>
          <DivPhotoBox>
            <div>
              <ImgPhotoBox src={gambarphoto1} />
            </div>
            <div>
              <ImgPhotoBox src={gambarphoto2} />
            </div>
            <div>
              <ImgPhotoBox src={gambarphoto3} />
            </div>
            <div>
              <ImgPhotoBox src={gambarphoto4} />
            </div>
            <div>
              <ImgPhotoBox src={gambarphoto5} />
            </div>
            <div>
              <ImgPhotoBox src={gambarphoto6} />
            </div>
          </DivPhotoBox>
        </DivProIntro>
        <DivProIntro>
          <DivTitleBox>
            <H3ProIntro>Friends</H3ProIntro>
            <ATitleBox href="#">All Friends</ATitleBox>
          </DivTitleBox>
          <PProIntro>120 (10 mutual)</PProIntro>
          <DivFriendsBox>
            <DivPosition>
              <ImgFriendsBox src={gambarMember1} />
              <PFriendsBox>Joseph N</PFriendsBox>
            </DivPosition>

            <DivPosition>
              <ImgFriendsBox src={gambarMember2} />
              <PFriendsBox>Nathan N</PFriendsBox>
            </DivPosition>

            <DivPosition>
              <ImgFriendsBox src={gambarMember3} />
              <PFriendsBox>George D</PFriendsBox>
            </DivPosition>

            <DivPosition>
              <ImgFriendsBox src={gambarMember4} />
              <PFriendsBox>Francis L</PFriendsBox>
            </DivPosition>

            <DivPosition>
              <ImgFriendsBox src={gambarMember5} />
              <PFriendsBox>Anthony E</PFriendsBox>
            </DivPosition>

            <DivPosition>
              <ImgFriendsBox src={gambarMember6} />
              <PFriendsBox>Michael A</PFriendsBox>
            </DivPosition>

            <DivPosition>
              <ImgFriendsBox src={gambarMember7} />
              <PFriendsBox>Edward M</PFriendsBox>
            </DivPosition>

            <DivPosition>
              <ImgFriendsBox src={gambarMember8} />
              <PFriendsBox>Bradon C</PFriendsBox>
            </DivPosition>

            <DivPosition>
              <ImgFriendsBox src={gambarMember9} />
              <PFriendsBox>James Doe</PFriendsBox>
            </DivPosition>
          </DivFriendsBox>
        </DivProIntro>
      </DivInfoCol>
      <DivPostCol>
        <WritePost
          postUser={postUser}
          handleChange={handleChange}
          handleGambar={handleGambar}
          handleSubmit={handleSubmit}
        />
        {daftar.map((post) => {
          return <Post key={post.id} post={post} tampil={tampil} />;
        })}
      </DivPostCol>
    </DivKontainer>
  );
};
export default ProfileInfo;
