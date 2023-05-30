import gambarIklan from "../images/advertisement.png";
import gambarUser1 from "../images/pp1.jpg";
import gambarUser2 from "../images/pp2.jpg";
import gambarUser3 from "../images/pp3.jpg";
import styled from "styled-components";

const DivKontainer = styled.div`
  flex-basis: 25%;
  position: sticky;
  top: 70px;
  align-self: flex-start;
  background: #fff;
  /* background: var(--bg-color); */
  padding: 20px;
  border-radius: 4px;
  color: #626262;
`;

const H4Text = styled.h4`
  font-weight: 600;
  font-size: 16px;
`;

const DivSidebarTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const ALinks = styled.a`
  text-decoration: none;
  color: #1876f2;
  font-size: 12px;
`;

const DivEvent = styled.div`
  display: flex;
  font-size: 14px;
  margin-bottom: 20px;
`;

const DivLeftEvent = styled.div`
  border-radius: 10px;
  height: 65px;
  width: 65px;
  margin-right: 15px;
  padding-top: 10px;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// const DivRightEvent = styled.div``;

const SpanText = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #1876f2;
  color: #fff;
  font-size: 10px;
  padding: 4px 0;
`;

const PText = styled.p`
  font-size: 12px;
`;

const ImgIklan = styled.img`
  width: 100%;
  margin-bottom: 20px;
  border-radius: 4px;
`;

const DivOnline = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const DivOnlineUser = styled.div`
  width: 40px;
  border-radius: 50%;
  margin-right: 15px;
`;

const ImgOnlineUser = styled.img`
  width: 40px;
  border-radius: 50%;
`;

const RightSidebar = () => {
  return (
    <DivKontainer>
      <DivSidebarTitle>
        <H4Text>Events</H4Text>
        <ALinks href="#">See All</ALinks>
      </DivSidebarTitle>

      <DivEvent>
        <DivLeftEvent>
          <h3>18</h3>
          <SpanText>March</SpanText>
        </DivLeftEvent>
        <div>
          <H4Text>Social Media</H4Text>
          <PText>
            <i className="fa-solid fa-location-dot"></i> Surabaya
          </PText>
          <ALinks href="#">More Info</ALinks>
        </div>
      </DivEvent>

      <DivEvent>
        <DivLeftEvent>
          <h3>22</h3>
          <SpanText>June</SpanText>
        </DivLeftEvent>
        <div>
          <H4Text>Mobile Marketing</H4Text>
          <PText>
            <i className="fa-solid fa-location-dot"></i> Surabaya
          </PText>
          <ALinks href="#">More Info</ALinks>
        </div>
      </DivEvent>

      <DivSidebarTitle>
        <H4Text>Advertisement</H4Text>
        <ALinks href="#">Close</ALinks>
      </DivSidebarTitle>

      <ImgIklan src={gambarIklan} />

      <DivSidebarTitle>
        <H4Text>Conversation</H4Text>
        <ALinks href="#">Hide Chat</ALinks>
      </DivSidebarTitle>

      <DivOnline>
        <DivOnlineUser>
          <ImgOnlineUser src={gambarUser1} />
        </DivOnlineUser>
        <p>Alison Mina</p>
      </DivOnline>

      <DivOnline>
        <DivOnlineUser>
          <ImgOnlineUser src={gambarUser2} />
        </DivOnlineUser>
        <p>Jackson Aston</p>
      </DivOnline>

      <DivOnline>
        <DivOnlineUser>
          <ImgOnlineUser src={gambarUser3} />
        </DivOnlineUser>
        <p>Samona Rose</p>
      </DivOnline>
    </DivKontainer>
  );
};
export default RightSidebar;
