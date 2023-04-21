import { ContextCart } from "@/components/CartContext";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="container mx-auto">
      <ContextCart>
        <NavBar />
        <div className="background_image"></div>
        <Component {...pageProps} />
      </ContextCart>
    </div>
  );
}
