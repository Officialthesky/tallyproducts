import React from "react";
import { Table } from "react-bootstrap";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { addProductAction } from "../../redux/actions/addProductAction";
export default function ProductTable() {
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.addProductReducer);

  const removeDetails = (item) => {
    const result = product.filter(function (details) {
      return details.productName !== item.productName;
    });

    dispatch(addProductAction(result));
  };

  return (
    <div className="productTable">
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
                  <img src={item.file} alt={item.productName} />
                </td>
                <td>{item.productName}</td>
                <td>{item.description}</td>
                <td>{item.price} Rs.</td>
              </>
              <td
                onClick={() => removeDetails(item, index)}
                className="removeProductDetails"
              >
                Remove
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
