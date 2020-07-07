import React from "react";
import Button from "./Button";

const ButtonBox = () => {
  return (
    <React.Fragment>
      <div className="row flex justify-content-around mr-auto ml-auto">
        <div className="col-4">
          <Button to={"/liveStreaming"} buyTicket size="big">
            Comprar boleto ahora
          </Button>
        </div>
        <div className="col-4">
          <Button href="https://wa.link/aykk0m" whatsapp size="big">
            WhatsApp
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ButtonBox;
