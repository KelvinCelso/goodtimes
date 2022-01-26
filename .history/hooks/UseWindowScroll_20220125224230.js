import React, { useEffect, useState } from "react";

function UseWindowScroll() {
  const [position, setPosition] = useState([]);
  useEffect(() => {
    console.log(window.scrollY);
    const scrollbg = () => {
      console.log(window.scrollY);
      setPosition([window.scrollY, window.scrollX]);
    };
    window.addEventListener("scroll", scrollbg);
    return () => {
      window.removeEventListener("scroll", scrollbg);
    };
  }, []);
  return position;
}

export default UseWindowScroll;
