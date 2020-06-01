const initialState = {
  auth: {},
  user: {
    name: "khaled",
    email: "khaled@Mail.com",
    id: "123456789",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "clickPAY": {
      return { ...state };
      break;
    }
  }

  return state;
};

export default reducer;
