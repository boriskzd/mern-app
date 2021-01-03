import {
  ADD_USER,
  // DELETE_USER,
  SHOW_ALL_USERS,
} from "./actionTypes";

import apis from "../api";

// Action Creator
export const addUser = (user) => ({
  type: ADD_USER,
  payload: {
    user,
  },
});

export const setAllUsers = (users) => {
  return {
    type: SHOW_ALL_USERS,
    users,
  };
};

export function getAllUsers() {
  return (dispatch) => {
    //
  };
}

// TODO: delete comments
export function fetchUsers() {
  return (dispatch) => {
    // HERE WE MAKE A REQUEST AND RETURN PROMISE (we could use axios here)
    fetch("/api/users") // THIS RETURNS PROMISE
      .then((res) => {
        res.json();
        console.log(4, res);
      }) // WE CONVERT RESPONSE TO JSON AND PASS IT FURTHER(we could do status check here)
      .then((data) => dispatch(setAllUsers(data.users))); // WE DISPATCH setUsers action and pass users collection to it
  };
}
