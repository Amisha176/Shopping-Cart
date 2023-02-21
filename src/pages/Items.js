import React from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../DATA/Index";
import "../Style.scss";
import AddOrRemoveButton from "../UI/AddOrRemoveButton";

export default function Items() {
  const { categoryId } = useParams();
  console.log(categoryId);
  const filteredItems = getItems(parseInt(categoryId));
  console.log(filteredItems);

  return (
    <div className="category-items">
      {filteredItems.map((item) => {
        return (
          <div className="category-item" key={item.id}>
            <img
              src={item.poster}
              alt={item.name}
              className="category-item-poster"
            />
            <div className="category-item-details">
              <div className="category-item-name">{item.name}</div>
              <div className="category-item-price">{item.price}</div>
              <AddOrRemoveButton item={item} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
