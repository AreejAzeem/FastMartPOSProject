import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import cartAnimation from "../../Lotties/96780-shopping-cart-icon.json"

const Cart = () => {
  const anime = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: cartAnimation,
    });
    return () => lottie.stop();
  }, []);
  return (
  
  <div ref={anime} style={{ height: 100, width: 100, marginTop:'-250%', marginLeft:'80%'}} ></div>
  )
};

export default Cart;
