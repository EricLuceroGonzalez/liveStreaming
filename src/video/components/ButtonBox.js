import React from "react";
import Button from "./Button";

const ButtonBox = () => {
  return (
    <React.Fragment>
      <div className="mt-4">
        {/*
            <div className="col-12 col-md-6">
          <Button href="https://wa.link/aykk0m" whatsapp size="big">
            WhatsApp
          </Button>
        </div>
 */}
        <div className="col-12 col-sm-8 d-flex mr-auto ml-auto justify-content-center">
          <Button to={"/liveStreaming"} buyTicket size="big">
            Comprar boleto
          </Button>
        </div>
      </div>
      <Button floating contactPhone="50769825076"></Button>
    </React.Fragment>
  );
};

export default ButtonBox;
