import { ADD_PRODUCT, DELETE_PRODUCT } from "../actions/types";
const initialState = {
  product: [],
  updatedContact: [],
};

const addProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case DELETE_PRODUCT: {
      return { ...state, updatedContact: action.payload };
    }
    default:
      return state;
  }
};

export default addProductReducer;
