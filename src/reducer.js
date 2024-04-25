export const initialState = {
  username: "Xu",
};

function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return {
        ...state,
        username: action.username,
      };
  }
}

export default reducer;
