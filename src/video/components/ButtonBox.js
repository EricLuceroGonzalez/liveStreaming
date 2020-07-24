import React from "react";
import Button from "./Button";
import { useHistory } from "react-router-dom";

const ButtonBox = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="mt-4 row d-flex ">
        <div className="col-12 bordea d-flex justify-content-center">
          <Button
            myClasses="btn btn-outline-danger"
            // onClick={() => history.push("https://wa.link/aykk0m")}
            size="big"
          >
            Chatear por WhatsApp
          </Button>
        </div>
        <div className="col-12 bordea d-flex justify-content-center">
          <Button
            buyTicket
            srcTicket={
              "https://play.streamingvideoprovider.com/popplayer.php?it=byb0xfhrycgk&is_link=1&w=720&h=405&pause=1&title=TestSTream&skin=3&repeat=&brandNW=1&start_volume=100&bg_gradient1=%23ffffff&bg_gradient2=%23e9e9e9&fullscreen=1&fs_mode=2&skinAlpha=50&colorBase=%23250864&colorIcon=%23ffffff&colorHighlight=%237f54f8&direct=false&no_ctrl=&auto_hide=1&viewers_limit=0&cc_position=bottom&cc_positionOffset=70&cc_multiplier=0.03&cc_textColor=%23ffffff&cc_textOutlineColor=%23ffffff&cc_bkgColor=%23000000&cc_bkgAlpha=0.1&image=https%3A%2F%2Fmember.streamingvideoprovider.com%2Fpanel%2Fserver%2Fclip%3Fa%3DGenerateThumbnail%26clip_id%3D2738418%26size%3Dlarge&mainBg_Color=%23ffffff&aspect_ratio=16%3A9&play_button=1&play_button_style=pulsing&sleek_player=1&stretch="
            }
            myClasses="btn btn-outline-danger"
            // onClick={() => history.push("https://wa.link/aykk0m")}
            size="big"
          >
          Comprar boleto ahora
          </Button>
        </div>
      </div>
      {/**
        <Button floating contactPhone="50769825076"></Button>
       */}
    </React.Fragment>
  );
};

export default ButtonBox;
