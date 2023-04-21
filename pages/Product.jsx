import Menu from "@/components/Menu";

import { PRODUCTS } from "../components/data";

const Product = () => {
  return (
    <div>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
        {PRODUCTS.map((product) => {
          return <Menu key={product.id} items={product} />;
        })}
      </div>
    </div>
  );
};

export default Product;
