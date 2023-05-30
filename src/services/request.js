import { getRequest, postRequest, putRequest, deleteRequest } from "./api";

// user
export const regUser = (data) => {
  return postRequest("/user/register", data, {
    headers: {},
  });
};

export const logUser = (data) => {
  return postRequest("/user/login", data, {
    headers: {},
  });
};

export const authUser = () => {
  return getRequest("/user/auth", {
    headers: { accessToken: localStorage.getItem("accessToken") },
  });
};

// postingan
export const getAllPost = () => {
  return getRequest("/post", {
    headers: { accessToken: localStorage.getItem("accessToken") },
  });
};

export const getUserPost = (id) => {
  return getRequest(`/post/userpost/${id}`, {
    headers: { accessToken: localStorage.getItem("accessToken") },
  });
};

export const getOnePost = (id) => {
  return getRequest(`/post/${id}`, {
    headers: { accessToken: localStorage.getItem("accessToken") },
  });
};

export const postPost = (data) => {
  return postRequest("/post", data, {
    headers: { accessToken: localStorage.getItem("accessToken") },
  });
};

export const updatePost = (id, data) => {
  return putRequest(`/post/${id}`, data, {
    headers: { accessToken: localStorage.getItem("accessToken") },
  });
};

export const deletePost = (id) => {
  return deleteRequest(`/post/${id}`, {
    headers: { accessToken: localStorage.getItem("accessToken") },
  });
};

// komentar
export const getKomentar = (id) => {
  return getRequest(`/komen/${id}`, {
    headers: { accessToken: localStorage.getItem("accessToken") },
  });
};

export const postKomentar = (data) => {
  return postRequest("/komen", data, {
    headers: { accessToken: localStorage.getItem("accessToken") },
  });
};
