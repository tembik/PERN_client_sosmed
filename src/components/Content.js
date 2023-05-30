import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import MainContent from "../pages/MainContent";
import EditContent from "../pages/EditContent";
import SingleContent from "../pages/SingleContent";
import ProfileContent from "../pages/ProfileContent";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import styled from "styled-components";

import { getAllPost, deletePost } from "../services/request";

const DivKontainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13px 5%;
`;

const Content = () => {
  const [daftar, setDaftar] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    tampilAll();
  }, []);

  const tampilAll = () => {
    getAllPost().then((response) => setDaftar(response.data));
  };

  const hapusPost = (id) => {
    deletePost(id)
      .then(() => navigate("/"))
      .then(() => tampilAll());
  };

  return (
    <DivKontainer>
      <LeftSidebar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <MainContent daftar={daftar} tampil={tampilAll} hapus={hapusPost} />
          }
        />
        <Route
          exact
          path="/post/:id"
          element={<SingleContent hapus={hapusPost} />}
        />
        <Route
          exact
          path="/edit/:id"
          element={<EditContent tampilAll={tampilAll} />}
        />
      </Routes>
      <RightSidebar />
    </DivKontainer>
  );
};
export default Content;
