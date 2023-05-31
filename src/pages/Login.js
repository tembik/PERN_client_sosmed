import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { logUser } from "../services/request";
import styled from "styled-components";
import gambarBack from "../images/background-login.jpg";

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

const FormLog = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 30px;
  border-radius: 20px;
  background: #efefef;
`;

const LabelLog = styled.label`
  margin: 10px 0;
`;

const InputLog = styled.input`
  padding: 10px;
  border: none;
  border-radius: 10px;
`;

const ButtonLog = styled.button`
  margin-top: 20px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  padding: 10px;
  background: #1876f2;
`;

const LinkReg = styled(Link)`
  text-decoration: none;
`;

const PReg = styled.p`
  margin-top: 10px;
`;

const PInfo = styled.p`
  font-size: 30px;
`;

const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmitLog = (e) => {
    e.preventDefault();
    const coba = toast.loading("mohon tunggu....");
    setLoading(true)
    const userData = { username: username, password: password };
    logUser(userData).then((response) => {
      setLoading(false)
      if (response.data.message) {
        toast.update(coba, {
          render: response.data.message,
          type: "error",
          autoClose: 5000,
          closeButton: true,
          isLoading: false,
        });
      } else {
        localStorage.setItem("accessToken", response.data.token);
        dispatch({ type: "LOGIN", payload: response.data });
        // navigate("/")
        window.location.href = "/";
      }
    });
  };

  return (
    <>
      <DivKontainer>
        <SpanJudul>Login</SpanJudul>
        <FormLog onSubmit={onSubmitLog}>
          <LabelLog>Username</LabelLog>
          <InputLog
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <LabelLog>Password</LabelLog>
          <InputLog
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonLog disabled={loading}>Login</ButtonLog>
          <ToastContainer />
          <PReg>
            belum punya akun? silahkan{" "}
            <LinkReg to="/register">register</LinkReg>
          </PReg>
        </FormLog>
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
export default Login;
