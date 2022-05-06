import { ADD_PRODUCT, DELETE_PRODUCT } from "./types";

export const addProductAction = (data) => {
  return {
    type: ADD_PRODUCT,
    payload: data,
  };
};
export const deleteProductAction = (data) => {
  return {
    type: DELETE_PRODUCT,
    payload: data,
  };
};
