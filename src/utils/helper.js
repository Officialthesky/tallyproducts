import { toast } from "react-toastify";

export default function findingLengthOfString(inputValue) {
  let productNameLength = inputValue.length;
  return productNameLength;
}

let options = {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const toastError = (msg) => {
  toast.error(msg, {
    ...options,
  });
};

export const toastSuccess = (msg) => {
  toast.success(msg, {
    ...options,
  });
};
