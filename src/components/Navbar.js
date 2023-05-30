import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Settings from "./Settings";
import logo from "../images/logo.png";
import notifikasi from "../images/notification.png";
import inbox from "../images/inbox.png";
import video from "../images/video.png";
import search from "../images/search.png";
import profile from "../images/profile-pic.png";

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1876f2;
  padding: 5px 5%;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const DivLeft = styled.div`
  display: flex;
  align-items: center;
`;

const DivRight = styled.div`
  display: flex;
  align-items: center;
`;

const LiMenu = styled.li`
  list-style: none;
  display: inline-block;
`;

const ImgLogo = styled.img`
  width: 160px;
  margin-right: 45px;
`;

const ImgMenu = styled.img`
  width: 28px;
  margin: 0 15px;
`;

const DivSearch = styled.div`
  background: #efefef;
  width: 350px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 15px;
`;

const InputSearch = styled.input`
  width: 100%;
  background: transparent;
  padding: 10px;
  outline: none;
  border: 0;
`;

const ImgSearch = styled.img`
  width: 18px;
`;

const DivUserIcon = styled.div`
  margin-left: 30px;
`;

const ImgUserIcon = styled.img`
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

// const LinkLogo = styled(Link)``
const PText = styled.p`
  color: white;
`;

const Navbar = () => {
  const [kotak, setKotak] = useState(false);

  return (
    <NavContainer>
      <DivLeft>
        {/* <ImgLogo src={logo} /> */}
        <Link to="/">
          <ImgLogo src={logo} />
        </Link>
        <ul>
          <LiMenu>
            <ImgMenu src={notifikasi} />
          </LiMenu>
          <LiMenu>
            <ImgMenu src={inbox} />
          </LiMenu>
          <LiMenu>
            <ImgMenu src={video} />
          </LiMenu>
        </ul>
      </DivLeft>
      <DivRight>
        <DivSearch>
          <ImgSearch src={search} />
          <InputSearch type="text" placeholder="Search" />
        </DivSearch>
        <DivUserIcon onClick={() => setKotak(!kotak)}>
          <ImgUserIcon src={profile} />
        </DivUserIcon>
      </DivRight>
      {kotak ? <Settings /> : null}
    </NavContainer>
  );
};
export default Navbar;
