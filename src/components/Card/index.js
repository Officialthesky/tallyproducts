import React from "react";
import { Card } from "react-bootstrap";
import "./index.css";
import { useSelector } from "react-redux";

export default function ProductCard() {
  const { product } = useSelector((state) => state.addProductReducer);
  return (
    <div className="productCardContainer">
      {product.map((item, index) => (
        <Card style={{ width: "18rem" }} className="productCard" key={index}>
          <Card.Img variant="top" src={item.file} alt={item.productName} />
          <Card.Body>
            <Card.Title>{item.productName}</Card.Title>
            <Card.Text>{item.price}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
