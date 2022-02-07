import React, { useEffect, useState } from "react";

function UseWindowScroll() {
  const [position, setPosition] = useState(0);
  useEffect(() => {
    console.log(window.scrollY);
    const scrollbg = () => {
      setPosition([window.scrollY]);
    };
    document.addEventListener("scroll", scrollbg);
    return () => {
      document.removeEventListener("scroll", scrollbg);
    };
  }, []);
  return position;
}

export default UseWindowScroll;
