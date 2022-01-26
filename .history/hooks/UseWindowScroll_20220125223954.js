import React from "react";

function UseWindowScroll() {
  const [position, setPosition] = useState([]);
  useEffect(() => {
    console.log(window.scrollY);
    const scrollbg = () => {
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
