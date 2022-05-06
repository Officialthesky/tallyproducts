import React from "react";
import Productform from "../components/Form";
import Header from "../components/Header";
import ProductTable from "../components/Tablerow";

export default function Manageproducts() {
  return (
    <div>
      <Header />
      <Productform />
      <ProductTable />
    </div>
  );
}
