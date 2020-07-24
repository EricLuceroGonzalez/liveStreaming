import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { appendScript } from "../../user/appendScript";

const VideoOverlay = (props) => {
  useEffect(() => {
    appendScript("http://play.streamingvideoprovider.com/js/vapp.js");
    console.log(appendScript);
  }, []);


  var vars = {
    clip_id: "7gakq63hnog0",
    transparent: "true",
    pause: "1",
    repeat: "",
    bg_color: "#ffffff",
    fs_mode: "2",
    no_controls: "",
    start_img: "0",
    start_volume: "100",
    close_button: "",
    brand_new_window: "1",
    auto_hide: "1",
    stretch_video: "",
    player_align: "NONE",
    offset_x: "0",
    offset_y: "0",
    player_color_ratio: 0.6,
    skinAlpha: "50",
    colorBase: "#250864",
    colorIcon: "#ffffff",
    colorHighlight: "#7f54f8",
    direct: "false",
    is_responsive: "true",
    viewers_limit: 0,
    cc_position: "bottom",
    cc_positionOffset: 70,
    cc_multiplier: 0.03,
    cc_textColor: "#ffffff",
    cc_textOutlineColor: "#ffffff",
    cc_bkgColor: "#000000",
    cc_bkgAlpha: 0.1,
    aspect_ratio: "16:9",
    play_button: "1",
    play_button_style: "pulsing",
    sleek_player: "1",
  };
  const svp_player = new appendScript.VaapController(
    "div-stream",
    "",
    "80%",
    "80%",
    vars
  );

  const content = (
    <div style={{ border: "2px solid red", height: "400px" }}>
      <header className="col-8">
        <h5>Title here</h5>
        <div>{props.children}</div>
        <div id="svp_player7gakq63hnog0"></div>
      </header>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("div-stream"));
};

const LiveStreaming = () => {
  return (
    <React.Fragment>
      <div
      //   id="svp_player7gakq63hnog0"
      //   style="width: 720px; height: 810px; position: relative;"
      ></div>
      <VideoOverlay />
    </React.Fragment>
  );
};

export default LiveStreaming;
