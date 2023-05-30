import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Content from "./components/Content";
// import Footer from "./components/Footer";

import MainContent from "./pages/MainContent";
import SingleContent from "./pages/SingleContent";
import EditContent from "./pages/EditContent";
import ProfileContent from "./pages/ProfileContent";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import { getAllPost, deletePost, authUser } from "./services/request";
import { AuthContext } from "./context/AuthContext";
// import jwt_decode from "jwt-decode";

function App() {
  const { user } = useContext(AuthContext);

  // const [daftar, setDaftar] = useState([]);
  // const navigate = useNavigate();
  // const [authState, setAuthState] = useState(null);

  // const logout = () => {
  //   localStorage.removeItem("accessToken");
  //   setAuthState({
  //     username: "",
  //     id: 0,
  //     status: false,
  //   });
  // };

  // const cekUser = () => {
  //   authUser().then((response) => {
  //     if (response.data.error) {
  //       setAuthState({
  //         username: "",
  //         id: 0,
  //         status: false,
  //       });
  //     } else {
  //       setAuthState({
  //         username: response.data.username,
  //         id: response.data.id,
  //         status: true,
  //       });
  //     }
  //   });
  // }

  // useEffect(() => {
  //   authUser().then((response) => {
  //     if (response.data.error) {
  //       setAuthState({
  //         username: "",
  //         id: 0,
  //         status: false,
  //       });
  //     } else {
  //       setAuthState({
  //         username: response.data.username,
  //         id: response.data.id,
  //         status: true,
  //       });
  //     }
  //   });
  // }, []);

  // const cekUser = async () => {
  //   try {
  //     const userToken = localStorage.getItem("accessToken");
  //     const decodedUserToken = await jwt_decode(userToken);
  //     console.log(decodedUserToken);
  //     if (decodedUserToken){
  //       setAuthState(decodedUserToken)
  //     }
  //   } catch (error) {
  //     if (error.message) {
  //       console.log(error.message);
  //       navigate("/login");
  //     }
  //   }
  // };

  // useEffect(() => {
  //   tampilAll();
  // }, []);

  // const tampilAll = () => {
  //   getAllPost().then((response) => setDaftar(response.data));
  // };

  // const hapusPost = (id) => {
  //   deletePost(id)
  //     .then(() => navigate("/"))
  //     .then(() => tampilAll());
  // };

  return (
    <Routes>
      <Route exact path="/" element={user ? <MainContent /> : <Login />} />
      <Route exact path="/post/:id" element={user ? <SingleContent /> : <Login />} />
      <Route exact path="/edit/:id" element={user ? <EditContent /> : <Login />} />
      <Route exact path="/profile/:id" element={user ? <ProfileContent /> : <Login />} />
      <Route exact path="/register" element={user ? <MainContent /> : <Register />} />
      <Route exact path="/login" element={user ? <MainContent /> : <Login />} />
    </Routes>
  );
}

export default App;
