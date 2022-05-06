import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Manageproducts from "./pages/Manageproducts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manage-products" element={<Manageproducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
