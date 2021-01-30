const intialState = {
  value: 0
}
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "INC": {
      return { value: state.value + 1 }
    }
    case "DEC": {
      return { value: state.value - 1 }
    }
    default: {
      return state;
    }
  }
}

export default reducer;