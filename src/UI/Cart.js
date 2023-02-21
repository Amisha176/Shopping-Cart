import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../store/cart";
import AddOrRemoveButton from "./AddOrRemoveButton";

export default function Cart() {
  const dispatch = useDispatch();
  const { isOpen, items } = useSelector((state) => state);
  const cartItemsId = Object.keys(items);
  console.log(isOpen);
  const bodyUI = () => {
    if (cartItemsId.length === 0) {
      return <h2 className="empty-cart">Your Cart is empty</h2>;
    } else {
      return (
        <div className="cart-body">
          {cartItemsId.map((id) => {
            return (
              <div className="cart-item">
                <div className="cart-item-title">{items[id].name}</div>
                <div className="cart-item-price">
                  {items[id].price} X {items[id].quantity} ={" "}
                  {items[id].price * items[id].quantity}
                </div>
                <AddOrRemoveButton item={items[id]} />
              </div>
            );
          })}
        </div>
      );
    }
  };

  return (
    <div className="cart" style={{ display: isOpen ? "block" : "none" }}>
      <div className="cart-title">
        <h1 className="cart-heading">Cart</h1>
        <button
          className="btn btn-danger"
          onClick={() => {
            dispatch(toggleCart(false));
          }}
        >
          Close
        </button>
      </div>
      {bodyUI()}
    </div>
  );
}
