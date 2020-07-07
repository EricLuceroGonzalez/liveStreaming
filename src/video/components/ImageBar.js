import React, { useState } from "react";

const ImageBar = () => {
  const [leftImage, setLeftImage] = useState(
    "https://dummyimage.com/800x150/000/fff"
  );
  const [rightImage, setRightImage] = useState(
    "https://dummyimage.com/800x150/750f0f/fff"
  );
  return (
    <React.Fragment>
      <div className="row d-flex justify-content-around ">

          <img src={leftImage} alt="show label"></img>
          <img src={rightImage} alt="show label"></img>
      </div>
    </React.Fragment>
  );
};

export default ImageBar;
