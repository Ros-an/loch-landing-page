import { useEffect, useState } from "react";

// custom hook that returns window screen size
function useWindowWidth() {
  const [width, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return width;
}

export default useWindowWidth;
