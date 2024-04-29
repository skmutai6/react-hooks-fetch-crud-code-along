import React from "react";

function Item({ item, onDeleteItem }) {
  function handleDeleteClick() {
    fetch(`http://localhost:4000/items/${item.id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(() => onDeleteItem(item));
  }
  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button className={item.isInCart ? "remove" : "add"}>
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove" onClick={handleDeleteClick} >Delete</button>
    </li>
  );
}

export default Item;
