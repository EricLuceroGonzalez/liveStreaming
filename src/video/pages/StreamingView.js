import React from "react";
import ButtonBox from "../components/ButtonBox";
import Streaming from "../components/Streaming";
import ImageBar from "../components/ImageBar";

const StreamingView = () => {

    return(
        <React.Fragment>
        <ImageBar/>
        <Streaming/>
        <ButtonBox/>
        </React.Fragment>
    )
};

export default StreamingView;
