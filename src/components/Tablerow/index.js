import React, { useState } from "react";
import { Alert, Table } from "react-bootstrap";
import "./index.css";
import { useSelector } from "react-redux";
import SureModal from "./SureModal";
export default function ProductTable() {
  const { product } = useSelector((state) => state.addProductReducer);
  const [isSure, setIsSure] = useState(false);

  const [data, setData] = useState({});

  const modalHandler = (item) => {
    setIsSure(!isSure);
    setData(item);
  };

  return (
    <div className="productTable">
      {isSure && <SureModal modalHandler={modalHandler} item={data} />}
      <Table responsive>
        <thead>
          <tr>
            <th></th>
            <th>Name </th>
            <th>Description </th>
            <th>Price </th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => (
            <tr key={index}>
              <>
                <td className="tableImg">
                  {item.file.length !== 0 ? (
                    <img src={item.file} alt={item.productName} />
                  ) : null}
                </td>
                <td>{item.productName}</td>
                <td>{item.description}</td>
                <td>{item.price} Rs.</td>
              </>
              <td
                onClick={() => modalHandler(item, index)}
                className="removeProductDetails"
              >
                Remove
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {product.length === 0 && <Alert variant="dark">ADD PRODUCTS</Alert>}
    </div>
  );
}
