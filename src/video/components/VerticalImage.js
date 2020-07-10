import React, { useState } from "react";

import bannerVertical from "../../assets/banner_400_240.png";

import bannerGif from "../../assets/800_150.gif";

const ImageVertical = () => {
  const [leftImage, setLeftImage] = useState(
    "https://dummyimage.com/800x150/000/fff"
  );
  const [rightImage, setRightImage] = useState(
    "https://dummyimage.com/1600x140/750f0f/fff"
  );

  return (
    <React.Fragment>
      <div className="col-12 mr-auto ml-auto">
        <img
          width="auto"
          height="auto"
          src={bannerVertical}
          alt="show label"
        ></img>
      </div>
    </React.Fragment>
  );
};

export default ImageVertical;
