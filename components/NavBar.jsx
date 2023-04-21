import Link from "next/link";
import { GiFullPizza } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { ShopPizzaContext } from "./CartContext";

const NavBar = () => {
  const { cartItem } = useContext(ShopPizzaContext);
  // const cartItemAmount = cartItem[id];
  return (
    <div className="flex justify-between p-4 ">
      <div className="text-4xl ">
        <Link href={"/"}>
          <GiFullPizza />
        </Link>
        <h3>Pizza Hooks</h3>
      </div>
      <div className="flex gap-6 center items-center">
        <Link className="text-xl hover:text-white" href={"/"}>
          home
        </Link>
        <Link className="text-xl hover:text-white" href={"/Product"}>
          Menu
        </Link>
        <Link href={"/Cart"}>
          <div className="flex items-center bg-amber-600 p-2 rounded-xl text-3xl hover:bg-slate-300">
            <FaShoppingCart />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
