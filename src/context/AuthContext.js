import { createContext, useReducer, useEffect } from "react";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  useEffect(() => {
    try {
      const userToken = localStorage.getItem("accessToken");
      const decodedToken = jwt_decode(userToken);
      if (decodedToken) {
        // console.log(decodedToken)
        dispatch({ type: "LOGIN", payload: decodedToken });
      }
    } catch (error) {
      console.log(error.message)
      dispatch({ type: "LOGOUT" });
    }
  }, []);

  console.log("AuthContext state: ", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
