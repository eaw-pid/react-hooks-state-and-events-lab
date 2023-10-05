import React, {useState} from "react";

function Item({ name, category }) {

const [isInCart, SetIsInCart] = useState(false)

  function handleClick() {
    SetIsInCart(isInCart => !isInCart)
  }

  //const appClass = itemAdd ? "in-cart" : ""

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{isInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
