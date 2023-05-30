import { useState, useEffect } from "react";
import { getUserPost } from "../services/request";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import ProfileInfo from "../components/ProfileInfo";
import gambarCover from "../images/cover.png";
import gambarProfile from "../images/profile.png";
import gambarMember1 from "../images/member-1.png";
import gambarMember2 from "../images/member-2.png";
import gambarMember3 from "../images/member-3.png";
import gambarMember4 from "../images/member-4.png";
import gambarAddFriend from "../images/add-friends.png";
import gambarMessage from "../images/message.png";
import gambarMore from "../images/more.png";

const DivKontainer = styled.div`
  padding: 20px 15%;
  color: #626262;
`;

const ImgCover = styled.img`
  width: 100%;
  border-radius: 6px;
  margin-bottom: 14px;
`;

const DivProfileDetail = styled.div`
  background: #fff;
  /* background: var(--bg-color); */
  padding: 20px;
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const DivPDRow = styled.div`
  display: flex;
  align-items: flex-start;
`;

const ImgPDRow = styled.img`
  width: 100px;
  margin-right: 20px;
  border-radius: 6px;
`;

const H3PDRow = styled.h3`
  font-size: 25px;
  font-weight: 600;
`;

const PProfileDetail = styled.p`
  font-size: 13px;
`;

const Imgfriends = styled.img`
  width: 25px;
  border-radius: 50%;
  margin-top: 12px;
`;

const DivPDRight = styled.div`
  text-align: right;
`;

const ButtonPDRight = styled.button`
  background: #1876f2;
  border: 0;
  outline: 0;
  padding: 6px 10px;
  display: inline-flex;
  align-items: center;
  color: #fff;
  border-radius: 3px;
  margin-left: 10px;
  cursor: pointer;
`;

const ImgPDRight = styled.img`
  height: 15px;
  margin-right: 10px;
`;

const ALink = styled.a`
  background: #e4e6eb;
  border-radius: 3px;
  padding: 12px;
  display: inline-flex;
  margin-top: 30px;
`;

const ImgMore = styled.img`
  width: 20px;
`;

const ProfileContent = () => {
  const [daftar, setDaftar] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    tampilAll();
  }, []);

  const tampilAll = () => {
    getUserPost(id).then((response) => setDaftar(response.data));
  };

  return (
    <>
      <Navbar />
      <DivKontainer>
        <ImgCover src={gambarCover} />
        <DivProfileDetail>
          <div>
            <DivPDRow>
              <ImgPDRow src={gambarProfile} />
              <div>
                <H3PDRow>Jack Nicholson</H3PDRow>
                <PProfileDetail>120 Friends - 20 mutual</PProfileDetail>
                <Imgfriends src={gambarMember1} />
                <Imgfriends src={gambarMember2} />
                <Imgfriends src={gambarMember3} />
                <Imgfriends src={gambarMember4} />
              </div>
            </DivPDRow>
          </div>
          <DivPDRight>
            <ButtonPDRight>
              <ImgPDRight src={gambarAddFriend} /> Friend
            </ButtonPDRight>
            <ButtonPDRight>
              <ImgPDRight src={gambarMessage} /> Message
            </ButtonPDRight>
            <br />
            <ALink href="#">
              <ImgMore src={gambarMore} />
            </ALink>
          </DivPDRight>
        </DivProfileDetail>
        <ProfileInfo daftar={daftar} tampil={tampilAll} />
      </DivKontainer>
      <Footer />
    </>
  );
};
export default ProfileContent;
