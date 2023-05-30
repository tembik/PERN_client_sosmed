import axios from "axios";

export const getRequest = async (url, headers) => {
  return await axios.get(`${process.env.REACT_APP_URL}` + url, headers);
};

export const postRequest = async (url, data, headers) => {
  return await axios.post(`${process.env.REACT_APP_URL}` + url, data, headers);
};

export const putRequest = async (url, data, headers) => {
  return await axios.put(`${process.env.REACT_APP_URL}` + url, data, headers);
};

export const deleteRequest = async (url, headers) => {
  return await axios.delete(`${process.env.REACT_APP_URL}` + url, headers);
};

// http://localhost:4000
// https://teal-gleaming-rhinoceros.cyclic.app