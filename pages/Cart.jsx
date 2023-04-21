import Image from "next/image";
import { PRODUCTS } from "@/components/data";
import { useContext, useState } from "react";
import { ShopPizzaContext } from "@/components/CartContext";

const Cart = () => {
  const [isShow, setIsShow] = useState(false);
  const handleOrder = () => {
    if (totalAmount > 0) {
      setIsShow(!isShow);
    }
    setTimeout(() => {
      setIsShow(false);
    }, 2000);
  };

  const {
    cartItem,
    addToCart,
    removeToCart,
    updateCartItemCount,
    getTotalCartAmount,
  } = useContext(ShopPizzaContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className="  max-w-3xl ml-auto mr-auto ">
      <h3 className="text-2xl mb-8 mt-8  ">Cart Item</h3>
      <hr className=" ring-2"></hr>
      <br></br>
      {PRODUCTS.map((item) => {
        if (cartItem[item.id] !== 0) {
          return (
            <div
              key={item.id}
              className="flex justify-between max-w-3xl items-center mb-8"
            >
              <div className="flex gap-4 items-center ">
                <Image
                  className=" rounded-xl "
                  src={item.productImage}
                  alt="pizza_image"
                  width={150}
                  height={150}
                />
                <h3>{item.productName}</h3>
              </div>
              <div className="flex gap-4 text-2xl items-center ">
                <button onClick={() => removeToCart(item.id)} className="p-2">
                  -
                </button>
                <input
                  className="w-10 rounded-2xl text-center "
                  value={cartItem[item.id]}
                  onChange={(e) =>
                    updateCartItemCount(Number(e.target.value), item.id)
                  }
                />
                <button onClick={() => addToCart(item.id)} className="p-1.5">
                  +
                </button>
              </div>
              <div>
                <div className="flex gap-8 items-center te">
                  <h3 className="p-1 text-xl">X</h3>
                  <h5>{item.price}</h5>
                </div>
              </div>
            </div>
          );
        }
      })}
      <div className="text-end">
        <h4 className="mt-4">
          <b>Grand Total</b>: {totalAmount}
        </h4>

        <button className="mt-4 p-2" onClick={handleOrder}>
          Order now
        </button>
      </div>
      {isShow && (
        <div className=" fixed top-1/3    ">
          <h1> Thank you for your order</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
