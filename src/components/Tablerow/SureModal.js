import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProductAction } from "../../redux/actions/addProductAction";
import { toastSuccess } from "../../utils/helper";
import "./index.css";
export default function SureModal({ modalHandler, item }) {
  const { product } = useSelector((state) => state.addProductReducer);
  const dispatch = useDispatch();

  const removeDetails = () => {
    const result = product.filter(function (details) {
      return details.productName !== item.productName;
    });

    dispatch(addProductAction(result));
    modalHandler();
    toastSuccess("product removed successfully!");
  };
  return (
    <div className="modal">
      <Modal.Dialog style={{ width: 600 }}>
        <Modal.Header onClick={modalHandler} closeButton>
          <Modal.Title>{item.productName}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Do you really wants to delete?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={modalHandler}>
            Cancel
          </Button>
          <Button variant="success" onClick={removeDetails}>
            CONFIRM
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
