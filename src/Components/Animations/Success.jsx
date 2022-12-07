import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import SuccessAnimation from "../../Lotties/success.json"

const Success = () => {
  const anime = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: SuccessAnimation,
    });
    return () => lottie.stop();
  }, []);
  return (
  
  <div ref={anime} style={{ height: 300, width: 300,marginTop:"-300px", marginLeft:'150px'}} ></div>
  )
};

export default Success;
