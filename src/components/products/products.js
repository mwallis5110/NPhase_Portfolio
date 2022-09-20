import React, {useEffect} from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import "./products.css";

export default function Products() {


   useEffect(() => {
     Aos.init({ duration: 1500 });
   }, []);

  return (
    <div className="productsWrapper" data-aos="slide-left">
      <h2 className="productsHeading">
        **Something about using the most advanced and highest quality audio
        production products, such as:**
      </h2>
    </div>
  );
}
