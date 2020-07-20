import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

// create exportable apis for creating deleting and displaying users
// apis can be imported in other files individually or as "apis" object below
//
// ${id} in api is used as parameter which user ID is api referencing to
export const insertUser = (payload) => api.post(`/user`, payload);
export const getAllUsers = () => api.get(`/users`);
export const deleteUserById = (id) => api.delete(`/user/${id}`);
export const getUserById = (id) => api.get(`/user/${id}`);

// create apis object for easy usage of apis
const apis = {
  insertUser,
  getAllUsers,
  deleteUserById,
  getUserById,
};

export default apis;
