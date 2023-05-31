import { useState } from "react";
import { Link } from "react-router-dom";
import { regUser } from "../services/request";
import styled from "styled-components";
import gambarBack from "../images/background-register.jpg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DivKontainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  /* justify-content: center; */
  flex-direction: column;
  padding: 13px 5%;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${gambarBack});
  background-size: cover;
  /* position: fixed; */
`;

const SpanJudul = styled.span`
  font-size: 40px;
`;

const FormReg = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 30px;
  border-radius: 20px;
  background: #efefef;
`;

const LabelReg = styled.label`
  margin: 10px 0;
`;

const InputReg = styled.input`
  padding: 10px;
  border: none;
  border-radius: 10px;
`;

const ButtonReg = styled.button`
  margin-top: 20px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  padding: 10px;
  background: #1876f2;
`;

const LinkLog = styled(Link)`
  text-decoration: none;
`;

const PLog = styled.p`
  margin-top: 10px;
`;

const PInfo = styled.p`
  font-size: 30px;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitReg = (e) => {
    e.preventDefault();
    const coba = toast.loading("mohon tunggu....");
    setLoading(true)
    const userData = { username: username, password: password };
    regUser(userData).then((response) => {
      setLoading(false)
      if (response.data.gagal) {
        toast.update(coba, {
          render: response.data.gagal,
          type: "error",
          autoClose: 5000,
          closeButton: true,
          isLoading: false
        })
      } else if (response.data.message) {
        toast.update(coba, {
          render: response.data.message,
          type: "success",
          autoClose: 5000,
          closeButton: true,
          isLoading: false
        })
        setUsername("");
        setPassword("");
      }
    });
  };

  return (
    <>
      <DivKontainer>
        <SpanJudul>Register</SpanJudul>
        <FormReg onSubmit={onSubmitReg}>
          <LabelReg>Username</LabelReg>
          <InputReg
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <LabelReg>Password</LabelReg>
          <InputReg
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonReg disabled={loading}>Register</ButtonReg>
          <ToastContainer />
          <PLog>
            sudah punya akun? silahkan <LinkLog to="/login">login</LinkLog>
          </PLog>
        </FormReg>
      </DivKontainer>
      <PInfo>
        membuat project sosial media dengan <b>ReactJS</b> & <b>NodeJS</b> rest
        api & <b>Postgresql </b>database
      </PInfo>
      <PInfo>
        Fitur: Multi User Registration, JWT authentication, add post, image
        uploading
      </PInfo>
    </>
  );
};
export default Register;
