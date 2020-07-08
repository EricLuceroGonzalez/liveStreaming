import React, { useLayoutEffect, useState } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

const ShowWindowDimensions = (props) => {
  const [width, height] = useWindowSize();
  return (
    <div className='mr-auto ml-auto'>
      W x H: {width} x {height}
    </div>
  );
};

export default ShowWindowDimensions;
