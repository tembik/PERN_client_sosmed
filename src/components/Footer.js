import styled from "styled-components";

const DivKontainer = styled.div`
  text-align: center;
  color: #9a9a9a;
  padding: 10px 0 20px;
  font-size: 13px;
`;

const Footer = () => {
  return (
    <DivKontainer>
      <p>Copyright 2021 - Easy Tutorials Youtube Channel</p>
    </DivKontainer>
  );
};
export default Footer;
