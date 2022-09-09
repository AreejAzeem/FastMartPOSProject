import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import fastmartAnimation from "../../Lotties/92411-shopping-cart.json"

const FastMart = () => {
  const anime = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: fastmartAnimation,
    });
    return () => lottie.stop();
  }, []);
  return (
  
  <div ref={anime} style={{ height: 100, width: 100}} ></div>
  )
};

export default FastMart;
