import React from "react";
import { addToCart } from "../store/cart";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeFromCart } from "../store/cart";

export default function AddOrRemoveButton({ item }) {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state);
  if (!items[item.id]) {
    return (
      <button
        className="btn btn-success"
        onClick={() => {
          dispatch(addToCart(item));
          //dispatch an add to cart action}
        }}
      >
        Add to Cart
      </button>
    );
  } else {
    let current_item = items[item.id];
    return (
      <div className="add-remove-btn">
        <button
          className="btn btn-success"
          onClick={() => {
            dispatch(removeFromCart(item));
          }}
        >
          -
        </button>
        <span className="item-quantity">{current_item.quantity}</span>
        <button
          className="btn btn-success"
          onClick={() => {
            dispatch(addToCart(item));
          }}
        >
          +
        </button>
      </div>
    );
  }
}
