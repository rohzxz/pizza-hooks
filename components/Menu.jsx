import Image from "next/image";
import React, { useContext } from "react";

import Link from "next/link";
import { ShopPizzaContext } from "./CartContext";

const Menu = (props) => {
  const { addToCart, cartItem } = useContext(ShopPizzaContext);
  const { id, productName, productImage, size, price } = props.items;
  const cartItemAmount = cartItem[id];
  return (
    <div className="container">
      <div key={id} className="p-6 shadow-xl rounded-xl text-center ">
        <Link href={`/SingleItem`}>
          <Image
            className="m-auto rounded-lg "
            src={productImage}
            alt="image-pizza"
            width="250"
            height="250"
          />
          <h4>{productName}</h4>
          <p>{size}</p>
        </Link>
        <div className="flex justify-between items-center">
          <h5 className="text-2xl"> ${price}</h5>
          <button
            className="px-3 p-2 hover:bg-orange-800"
            onClick={() => {
              addToCart(id);
            }}
          >
            ADD{cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
