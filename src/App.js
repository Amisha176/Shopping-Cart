import "./App.css";
import NavBar from "./NavBar";
import Cart from "./UI/Cart";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="items/:categoryId" element={<Items />} />
        </Routes>
      </BrowserRouter>
      <Cart />
    </div>
  );
}

export default App;
