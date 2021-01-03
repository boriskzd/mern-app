import { ADD_USER, DELETE_USER, SHOW_ALL_USERS } from "../actionTypes";

// TODO: dalje radit po ovom https://codesandbox.io/s/todo-app-with-redux-v2iu9?file=/src/redux/reducers/todos.js

const initialState = {
  allUsers: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      console.log("ADD_USER called from reducers/userReducer.js");
      // const
      break;
    }
    case SHOW_ALL_USERS: {
      console.log("SHOW_ALL_USERS called from reducers/userReducer.js");
      // const
      break;
    }
    case DELETE_USER: {
      console.log("DELETE_USER called from reducers/userReducer.js");
      // const
      break;
    }
    default:
      return state;
  }
}
