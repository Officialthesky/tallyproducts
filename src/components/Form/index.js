import React, { useState } from "react";
import "./index.css";
import { Button, Col, Form, Row } from "react-bootstrap";
import { addProductAction } from "../../redux/actions/addProductAction";
import { useDispatch } from "react-redux";
import { validatePrductName } from "../../utils/helper";
import findingLengthOfString from "../../utils/helper";
export default function Productform() {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [productDetails, setProductDetails] = useState([]);
  const [file, setFile] = useState([]);

  const saveProductName = (e) => {
    setProductName(e.target.value);
    console.log(e.target.value);
  };
  const savePrice = (e) => {
    setPrice(e.target.value);
    console.log(e.target.value);
  };
  const saveDescription = (e) => {
    setDescription(e.target.value);
    console.log(e.target.value);
  };

  const addProduct = (e) => {
    e.preventDefault();

    //when use form use this
    let productNameLength = findingLengthOfString(productName);
    if (productNameLength === 0) {
      alert("Product name can't be empty");
      return;
    }
    // checking if Productname is a number or string
    const productNameCheck = isNaN(productName);
    if (productNameCheck === true) {
    } else {
      alert("Please enter a valid Product Name");
      return;
    }
    const productNameCharacterCheck = validatePrductName(productName);
    if (productNameCharacterCheck === true) {
    } else {
      alert("Please enter valid Product Name");
      return;
    }
    let priceLength = findingLengthOfString(price);
    if (priceLength === 0) {
      alert("Price can't be empty");
      return;
    }
    let tempProductDetails = productDetails;
    let details = {
      productName,
      price,
      description,
      file,
    };
    tempProductDetails.push(details);
    setProductDetails(tempProductDetails);

    dispatch(addProductAction(tempProductDetails));
    setProductName("");
    setPrice("");
    setDescription("");
  };

  const thisFileChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="productForm">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              onChange={saveProductName}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Price"
              onChange={savePrice}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridDescription">
            <Form.Label>Product description (optional)</Form.Label>
            <Form.Control as="textarea" rows={4} onChange={saveDescription} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridImage">
            <Form.Label>Product image (optional)</Form.Label>
            <Form.Control type="file" size="lg" onChange={thisFileChange} />
          </Form.Group>
        </Row>
        <Button
          className="addProductDetails"
          type="submit"
          onClick={addProduct}
        >
          Add Product
        </Button>
      </Form>
    </div>
  );
}
