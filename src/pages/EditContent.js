import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import WritePost from "../components/WritePost";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getOnePost, updatePost } from "../services/request";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DivKontainer1 = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13px 5%;
`;

const DivKontainer2 = styled.div`
  flex-basis: 47%;
`;

const EditContent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [postUser, setPostUser] = useState({
    isi: "",
    gambar: null,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    tampil();
  }, []);

  const tampil = () => {
    getOnePost(id).then((response) => {
      setPostUser((prev) => {
        return { ...prev, isi: response.data.isi };
      });
    });
  };

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
    const coba = toast.loading("mohon tunggu....");
    setLoading(true)
    const formData = new FormData();
    formData.append("isi", postUser.isi);
    formData.append("image", postUser.gambar);
    updatePost(id, formData)
      
      .then((response) => {
        tampil()
        toast.update(coba, {
          render: response.data.message,
            type: "success",
            autoClose: 5000,
            closeButton: true,
            isLoading: false,
        })
        setLoading(false)
      })
      .then(() => navigate(`/post/${id}`))
  };

  return (
    <>
      <Navbar />
      <DivKontainer1>
        <LeftSidebar />
        <DivKontainer2>
          <WritePost
            postUser={postUser}
            handleChange={handleChange}
            handleGambar={handleGambar}
            handleSubmit={handleSubmit}
            loading={loading}
          />
        </DivKontainer2>
        <RightSidebar />
      </DivKontainer1>
      <Footer />
    </>
  );
};
export default EditContent;
