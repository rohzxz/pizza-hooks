import Image from "next/image";
import image1 from "../public/img/pizza.jpg";
import { useState } from "react";
// import { useRouter } from "next/router";

const SingleItem = () => {
  const [item, setItem] = useState({});
  //   let { query } = useRouter();
  //   console.log(query);
  return (
    <>
      <h2>
        actually I do not know how to bring the item in this component i need to
        learn more next js
      </h2>
      <div className="flex gap-12 place-content-center mt-40">
        <div>
          <Image
            className="rounded-xl"
            src={image1}
            alt="image_pizza"
            height="450"
            width="450"
          />
        </div>
        <div className=" grid gap-2 text-center text-3xl">
          <h2>Havana pizza</h2>
          <h4>small</h4>
          <p>$500</p>

          <button>Back</button>
        </div>
      </div>
    </>
  );
};

export default SingleItem;
