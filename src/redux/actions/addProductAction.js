import { ADD_PRODUCT } from "./types";

export const addProductAction = (data) => {
  return {
    type: ADD_PRODUCT,
    payload: data,
  };
};
