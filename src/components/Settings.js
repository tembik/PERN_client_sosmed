import { Link } from "react-router-dom";
import styled from "styled-components";
import gambarProfilePic from "../images/profile-pic.png";
import gambarFeedback from "../images/feedback.png";
import gambarSetting from "../images/setting.png";
import gambarHelp from "../images/help.png";
import gambarDisplay from "../images/display.png";
import gambarLogout from "../images/logout.png";
import gambarArrow from "../images/arrow.png";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const DivKontainer = styled.div`
  position: absolute;
  width: 90%;
  max-width: 350px;
  background: #fff;
  /* background: var(--bg-color); */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  overflow: hidden;
  top: 108%;
  right: 5%;
  /* max-height: 0; */
  /* transition: max-height 0.3s; */
`;

const HrGaris = styled.hr`
  border: 0;
  height: 1px;
  background: #9a9a9a;
  margin: 15px 0;
`;

const DivMenuInner = styled.div`
  padding: 20px;
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

const ALink = styled.a`
  font-size: 12px;
  color: #1876f2;
  text-decoration: none;
`;

const LinkProfile = styled(Link)`
  font-size: 12px;
  color: #1876f2;
  text-decoration: none;
`;

const DivSettingLink = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
`;

const ImgSettingIcon = styled.img`
  width: 38px;
  margin-right: 10px;
  border-radius: 50%;
`;

const ASettingLink = styled.a`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: #626262;
`;

const ButtonLogout = styled.button`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: #626262;
  cursor: pointer;
  border: none;
  background: #fff;
  font-size: 16px;
`;

const ImgArrow = styled.img`
  width: 10px;
`;

const Settings = () => {
  const { dispatch, user } = useContext(AuthContext);

  const onClickLogout = () => {
    localStorage.removeItem("accessToken");
    dispatch({ type: "LOGOUT" });
    window.location.href = "/login"
  };

  return (
    <DivKontainer>
      <div>
        <span></span>
      </div>
      <DivMenuInner>
        <DivUserProfile>
          <ImgUserProfile src={gambarProfilePic} />
          <div>
            <PText>{user.username}</PText>
            <LinkProfile to={`/profile/${user.id}`}>See your profile</LinkProfile>
          </div>
        </DivUserProfile>
        <HrGaris />

        <DivUserProfile>
          <ImgUserProfile src={gambarFeedback} />
          <div>
            <PText>Give Feedback</PText>
            <ALink href="#">Help us improve the new design</ALink>
          </div>
        </DivUserProfile>
        <HrGaris />

        <DivSettingLink>
          <ImgSettingIcon src={gambarSetting} />
          <ASettingLink href="#">
            Settings & Privacy <ImgArrow src={gambarArrow} />
          </ASettingLink>
        </DivSettingLink>

        <DivSettingLink>
          <ImgSettingIcon src={gambarHelp} />
          <ASettingLink href="#">
            Help & Support <ImgArrow src={gambarArrow} />
          </ASettingLink>
        </DivSettingLink>

        <DivSettingLink>
          <ImgSettingIcon src={gambarDisplay} />
          <ASettingLink href="#">
            Display & Accessibility <ImgArrow src={gambarArrow} />
          </ASettingLink>
        </DivSettingLink>

        <DivSettingLink>
          <ImgSettingIcon src={gambarLogout} />
          <ButtonLogout onClick={onClickLogout}>
            Logout <ImgArrow src={gambarArrow} />
          </ButtonLogout>
        </DivSettingLink>
      </DivMenuInner>
    </DivKontainer>
  );
};
export default Settings;
