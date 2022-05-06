export const validatePrductName = (productName) => {
  var re = /^[A-Za-z ]+$/;
  return re.test(productName);
};
export default function findingLengthOfString(inputValue) {
  let productNameLength = inputValue.length;
  return productNameLength;
}
