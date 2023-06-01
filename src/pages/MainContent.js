import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Post from "../components/Post";
import WritePost from "../components/WritePost";
import { useState, useEffect } from "react";
import gambarUpload from "../images/upload.png";
import gambarMember1 from "../images/pp1.jpg";
import gambarMember2 from "../images/pp2.jpg";
import gambarMember3 from "../images/pp3.jpg";
import gambarMember4 from "../images/pp4.jpg";
import gambarStatus1 from "../images/status-1.png";
import gambarStatus2 from "../images/status2.jpg";
import gambarStatus3 from "../images/status3.jpg";
import gambarStatus4 from "../images/status4.jpg";
import gambarStatus5 from "../images/status1.jpg";

import styled from "styled-components";
import { getAllPost, postPost } from "../services/request";

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

const DivStoryGallery = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const DivStory = styled.div`
  flex-basis: 18%;
  padding-top: 32%;
  position: relative;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
`;

const DivStory1 = styled(DivStory)`
  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5)),
    url(${gambarStatus1});
`;

const DivStory2 = styled(DivStory)`
  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5)),
    url(${gambarStatus2});
`;

const DivStory3 = styled(DivStory)`
  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5)),
    url(${gambarStatus3});
`;

const DivStory4 = styled(DivStory)`
  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5)),
    url(${gambarStatus4});
`;

const DivStory5 = styled(DivStory)`
  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5)),
    url(${gambarStatus5});
`;

const ImgStory = styled.img`
  position: absolute;
  width: 45px;
  border-radius: 50%;
  top: 10px;
  left: 10px;
  border: 5px solid #1876f2;
`;

const ImgStory1 = styled(ImgStory)`
  top: unset;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
  border: 0;
  width: 35px;
`;

const PStory = styled.p`
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 14px;
`;

const MainContent = () => {
  const [daftar, setDaftar] = useState([]);
  const [postUser, setPostUser] = useState({
    isi: "",
    gambar: null,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    tampilAll();
  }, []);

  const tampilAll = () => {
    getAllPost().then((response) => setDaftar(response.data));
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
    postPost(formData).then((response) => {
      tampilAll()
      toast.update(coba, {
        render: response.data.message,
          type: "success",
          autoClose: 5000,
          closeButton: true,
          isLoading: false,
      })
      setLoading(false)
    });
    setPostUser((prev) => {
      return { ...prev, isi: "", gambar: null };
    });
  };

  return (
    <>
      <Navbar />
      <DivKontainer1>
        <LeftSidebar />
        <DivKontainer2>
          <DivStoryGallery>
            <DivStory1>
              <ImgStory1 src={gambarUpload} />
              <PStory>Post Story</PStory>
            </DivStory1>
            <DivStory2>
              <ImgStory src={gambarMember1} />
              <PStory>Rina</PStory>
            </DivStory2>
            <DivStory3>
              <ImgStory src={gambarMember2} />
              <PStory>Rani</PStory>
            </DivStory3>
            <DivStory4>
              <ImgStory src={gambarMember3} />
              <PStory>Maria</PStory>
            </DivStory4>
            <DivStory5>
              <ImgStory src={gambarMember4} />
              <PStory>Hanina</PStory>
            </DivStory5>
          </DivStoryGallery>
          <WritePost
            postUser={postUser}
            handleChange={handleChange}
            handleGambar={handleGambar}
            handleSubmit={handleSubmit}
            loading={loading}
          />
          {daftar.map((post) => {
            return <Post post={post} key={post.id} tampil={tampilAll} />;
          })}
        </DivKontainer2>
        <RightSidebar />
      </DivKontainer1>
      <Footer />
    </>
  );
};
export default MainContent;
