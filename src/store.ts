import { configureStore } from "@reduxjs/toolkit";

const formDataReducer = (state = {}, action: any) => {
  switch (action.type) {
    case "SET_FORM_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    formData: formDataReducer,
  },
});

export default store;
