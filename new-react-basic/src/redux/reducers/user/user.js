import user_types from "./types";

const init_state = {
  id : 0,
  username: "",
  password: "",
  email: "",
  role: ""
};

function userReducer(state = init_state, action) {
  //kumpulan action
  //akan mempengaruhi state
  if(action.type === user_types.USER_LOGIN){
    return{
      ...state,
      id : action.payload.id,
      username: action.payload.username,
      password: action.payload.password,
      email: action.payload.email,
      role: action.payload.role
    }
  }else if(action.type === user_types.USER_LOGOUT){
    return init_state
  }
  
  return state;
}


export default userReducer;
