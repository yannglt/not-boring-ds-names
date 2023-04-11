import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web"

type LottieProps = {
  path: string;
  className: string;
};

export default function Animation({ path, className }: LottieProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const container = containerRef.current;

    try {
      Lottie.loadAnimation({
        container: container,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require(`../public/animations/${path}`),
      });
    } catch (error) {
      console.error(error);
    }
  }, [path]);

  return ( <span ref={containerRef} className={className} /> );
}