// Actions
const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";

const initialState = {
  username: ""
  , email: ""
  , loggedIn: false
}


// Returns state for each action

export default function reducer(state = initialState, action = {}) {
  switch(action.type) {
    case LOGIN:
      return Object.assign( {}, action.user, { loggedIn: true } );
    case LOGOUT:
      return initialState;
  }

  return state;
}


// Action Creators

export function login(user) {
  return { type: LOGIN, user};
}

export function logout() {
  return { type: LOGOUT };
}
