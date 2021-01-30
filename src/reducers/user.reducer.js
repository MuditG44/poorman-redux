const intialState = {
  users: []
}
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_USER": {
      return { ...state, users: [...state.users, action.user] }
    }
    default: {
      return state;
    }
  }
}

export default reducer;