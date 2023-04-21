import Image from "next/image";
import heroImage from "../public/img/pizza.jpg";
import Link from "next/link";
const Main = () => {
  return (
    <section className=" h-full flex items-center justify-center gap-12 py-20 ">
      <div className="flex-col">
        <h2>Don,t Wait</h2>
        <Link href={"/Cart"}>
          <button className="p-3 mt-4">order Now</button>
        </Link>
      </div>
      <div>
        <Image
          src={heroImage}
          alt="pizza"
          width="600"
          height="600"
          className=" rounded-full "
        />
      </div>
    </section>
  );
};

export default Main;
