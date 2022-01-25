import React from "react";
import { useState, useEffect } from "react";

function UseWindowSize() {
  const [size, setSize] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
}

export default UseWindowSize;
