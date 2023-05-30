import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Post from "../components/Post";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getOnePost } from "../services/request";

const DivKontainer1 = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13px 5%;
`;

const DivKontainer2 = styled.div`
  flex-basis: 47%;
`;

const SingleContent = () => {
  const { id } = useParams();
  const [daftar, setDaftar] = useState("");

  useEffect(() => {
    tampil();
  }, []);

  const tampil = () => {
    getOnePost(id).then((response) => setDaftar(response.data));
  };

  return (
    <>
      <Navbar />
      <DivKontainer1>
        <LeftSidebar />
        <DivKontainer2>
          <Post post={daftar} key={daftar.id} />
        </DivKontainer2>
        <RightSidebar />
      </DivKontainer1>
      <Footer />
    </>
  );
};
export default SingleContent;
