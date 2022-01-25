import React from "react";
import { useState, useEffect } from "react";

function UseWindowSize() {
  const [size, setSize] = useState([innerHeight, innerWidth]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return size;
}

export default UseWindowSize;
