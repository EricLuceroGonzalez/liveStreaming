import React, { useState } from "react";

const ImageBar = () => {
  const [leftImage, setLeftImage] = useState(
    "https://dummyimage.com/800x150/000/fff"
  );
  const [rightImage, setRightImage] = useState(
    "https://dummyimage.com/1600x140/750f0f/fff"
  );
  return (
    <React.Fragment>
      <div className="row d-flex justify-content-around p-3">
          <img src={rightImage} alt="show label"></img>
      </div>
    </React.Fragment>
  );
};

export default ImageBar;
