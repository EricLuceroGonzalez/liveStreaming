import React from "react";

import bannerVertical from "../../assets/banner_400_240.png";

const ImageVertical = () => {
  // const [leftImage, setLeftImage] = useState(
  //   "https://dummyimage.com/800x150/000/fff"
  // );
  // const [rightImage, setRightImage] = useState(
  //   "https://dummyimage.com/1600x140/750f0f/fff"
  // );

  return (
    <React.Fragment>
        <img
        className='mb-2'
          width="100%"
          height="auto"
          src={bannerVertical}
          alt="show label"
        ></img>
    </React.Fragment>
  );
};

export default ImageVertical;
