import React from "react";
import { Link } from "react-router-dom";
import { getCategories } from "./DATA/Index";
import "./Style.scss";
import { useDispatch } from "react-redux";
import { toggleCart } from "./store/cart";
import { useSelector } from "react-redux";

export default function NavBar() {
  const dispatch = useDispatch();
  const category = getCategories();
  const { isOpen } = useSelector((state) => state);
  return (
    <div className="navbar">
      <Link to="/" className="navbar-item">
        Home
      </Link>
      <Link to="/about" className="navbar-item">
        About
      </Link>
      {category.map((item) => {
        return (
          <Link to={`items/${item.id}`} className="navbar-item" key={item.id}>
            {item.name}
          </Link>
        );
      })}
      <button
        className="btn cart-btn"
        onClick={() => {
          dispatch(toggleCart(!isOpen));
        }}
      >
        Cart
      </button>
    </div>
  );
}
