import React from "react";
import Button from "./Button";

const ButtonBox = () => {
  return (
    <React.Fragment>
      <div className="mt-5 row d-flex">
        <div className="col-4 col-sm-6 bordea">
          <Button href="https://wa.link/aykk0m" whatsapp size="big">
            WhatsApp
          </Button>
        </div>
        <div className="col-8 col-sm-6 bordea">
          <Button to={"/liveStreaming"} buyTicket size="big">
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
