import React from "react";
import ButtonBox from "../components/ButtonBox";
import Streaming from "../components/Streaming";
import ImageBar from "../components/ImageBar";
import ImageVertical from "../components/VerticalImage";
import Button from "../components/Button";
import LiveStreaming from "../components/LiveStreaming";

const StreamingView = () => {
  return (
    <React.Fragment>
      <div className="col-12 mt-3">
        <ImageBar />
        <div className="d-flex mt-4 justify-content-center">
          <div className="col-6 col-sm-8 justify-content-end">
            <Streaming />
            <LiveStreaming />
            <div className="col-12">
              <Button
                type="button"
                myClasses="btn btn-outline-danger"
                href={
                  "https://play.streamingvideoprovider.com/popapp.php?l=2273&w=720&h=800&p=46DIIE2FICI3GGC&title=danny+d&bgcolor1=%23ffffff&bgcolor2=%23e0e0e0&hide_playlist=1&hide_description=&hide_live_chat=&layout=default&is_inversed=&theme=light&image=https%3A%2F%2Fmember.streamingvideoprovider.com%2Fpanel%2Fserver%2Fclip%3Fa%3DGenerateThumbnail%26clip_id%3D2690740%26size%3Dlarge&use_html5=1&live_id=3ojwirdhlzs4&sel_playlist=&sel_multiplaylist=&is_responsive=1&is_vertical=&one_thumb_per_row=&thumbs_size=medium&disable_hash=1&skinAlpha=50&colorBase=%23250864&colorIcon=&colorHighlight=%237f54f8&fs_popin=&start_volume=&close_button=&player_align=NONE&player_bar=1&auto_play=&auto_hide_player_controls=1&chat_position=&description_position=&playlist_position=&allow_fullscreen=1&player_start_volume=&widget_height_behavior=0&template_published_fields=-1&play_button=1&play_button_style=pulsing"
                }
                size="big"
              >
                Ir al Streaming
              </Button>
            </div>
          </div>
          <div className="col-4 col-sm-2">
            <ImageVertical />
            <ButtonBox />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StreamingView;

// <div className="col-2">
// <ImageVertical />
// </div>
//
