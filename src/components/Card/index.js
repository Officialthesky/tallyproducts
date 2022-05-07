import React from "react";
import { Alert, Card } from "react-bootstrap";
import "./index.css";
import { useSelector } from "react-redux";

export default function ProductCard() {
  const { product } = useSelector((state) => state.addProductReducer);
  return (
    <div className="productCardContainer">
      {product.length === 0 && <Alert variant="dark">ADD PRODUCTS</Alert>}

      {product.map((item, index) => (
        <Card style={{ width: "18rem" }} className="productCard" key={index}>
          {item.file.length !== 0 ? (
            <Card.Img variant="top" src={item.file} alt={item.productName} />
          ) : null}
          <Card.Body>
            <Card.Title>{item.productName}</Card.Title>
            <Card.Text>Rs. {item.price}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
