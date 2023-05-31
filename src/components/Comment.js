import styled from "styled-components";
import gambarProfilePic from "../images/profile-pic.png";

const DivKontainer = styled.div`
  margin-top: 10px;
`;
const DivUserProfile = styled.div`
  display: flex;
  align-items: flex-start;
`;

const ImgUserProfile = styled.img`
  width: 35px;
  border-radius: 50%;
  margin-right: 10px;
`;

// const InputKomen = styled.input`
//   width: 100%;
//   height: 30px;
//   resize: none;
//   background: transparent;
//   border-radius: 10px;
//   padding: 5px;
// `;

const DivKomentar = styled.div`
  background: #efefef;
  padding: 5px;
  border-radius: 10px;
`;
const PNama = styled.p`
  margin-bottom: 5px;
  font-weight: 700;
`;
const PIsi = styled.p``;

const Comment = ({ komen }) => {
  return (
    <DivKontainer>
      <DivUserProfile>
        <ImgUserProfile src={gambarProfilePic} />
        <DivKomentar>
          <PNama>{komen.username}</PNama>
          <PIsi>{komen.isi}</PIsi>
        </DivKomentar>
      </DivUserProfile>
    </DivKontainer>
  );
};
export default Comment;
