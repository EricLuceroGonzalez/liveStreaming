import React, { useState } from "react";

import banner from '../../assets/banner_800_150.png'
import bannerGif from '../../assets/800_150.gif'
const ImageBar = () => {
  const [leftImage, setLeftImage] = useState(
    "https://dummyimage.com/800x150/000/fff"
  );
  const [rightImage, setRightImage] = useState(
    "https://dummyimage.com/1600x140/750f0f/fff"
  );

  return (
    <React.Fragment>
      <div className="col-8 p-3 mr-auto ml-auto">
          <img width='100%' height='auto'
          src={bannerGif} alt="show label"></img>
      </div>
    </React.Fragment>
  );
};

export default ImageBar;
