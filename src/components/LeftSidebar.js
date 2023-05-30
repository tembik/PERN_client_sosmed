import gambarNews from "../images/news.png";
import gambarFriends from "../images/friends.png";
import gambarGroup from "../images/group.png";
import gambarMarketplace from "../images/marketplace.png";
import gambarWatch from "../images/watch.png";
import gambarShortcut1 from "../images/shortcut-1.png";
import gambarShortcut2 from "../images/shortcut-2.png";
import gambarShortcut3 from "../images/shortcut-3.png";
import gambarShortcut4 from "../images/shortcut-4.png";

import styled from "styled-components";

const DivKontainer = styled.div`
  flex-basis: 25%;
  position: sticky;
  top: 70px;
  align-self: flex-start;
`;

const DivLinks = styled.div`
  border-bottom: 1px solid #ccc;
`;

const ALinks = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  color: #626262;
  width: fit-content;
`;

const ImgLinks = styled.img`
  width: 25px;
  margin-right: 15px;
`;

const ImgShortcutLinks = styled.img`
  width: 40px;
  border-radius: 4px;
  margin-right: 15px;
`;

const PText = styled.p`
  margin: 25px 0;
  color: #626262;
  font-weight: 500;
`;

const LeftSidebar = () => {
  return (
    <DivKontainer>
      <DivLinks>
        <ALinks href="#">
          <ImgLinks src={gambarNews} /> Latest News
        </ALinks>
        <ALinks href="#">
          <ImgLinks src={gambarFriends} /> Friends
        </ALinks>
        <ALinks href="#">
          <ImgLinks src={gambarGroup} /> Group
        </ALinks>
        <ALinks href="#">
          <ImgLinks src={gambarMarketplace} /> Marketplace
        </ALinks>
        <ALinks href="#">
          <ImgLinks src={gambarWatch} /> Watch
        </ALinks>
        <ALinks href="#">See More</ALinks>
      </DivLinks>
      <div>
        <PText>Your Shortcut</PText>
        <ALinks href="#">
          <ImgShortcutLinks src={gambarShortcut1} /> Web Developer
        </ALinks>
        <ALinks href="#">
          <ImgShortcutLinks src={gambarShortcut2} /> Web Design Course
        </ALinks>
        <ALinks href="#">
          <ImgShortcutLinks src={gambarShortcut3} /> Full Stack Development
        </ALinks>
        <ALinks href="#">
          <ImgShortcutLinks src={gambarShortcut4} /> Website Experts
        </ALinks>
      </div>
    </DivKontainer>
  );
};
export default LeftSidebar;
