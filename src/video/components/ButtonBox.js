import React from "react";
import Button from "./Button";
import { useHistory } from "react-router-dom";

const ButtonBox = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="mt-5 row d-flex">
        <div className="col-6 col-sm-6 bordea">
          <Button
            myClasses="btn btn-outline-primary"
            onClick={() => history.push("https://wa.link/aykk0m")}
            size="big"
          >
            WhatsApp
          </Button>
        </div>
        <div className="col-6 col-sm-6 bordea">
          <Button
            type="button"
            myClasses="btn btn-outline-primary"
            onClick={() => history.push("/liveStreaming")}
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
