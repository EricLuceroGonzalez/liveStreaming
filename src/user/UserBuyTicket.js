import React from "react";

import Button from "../video/components/Button";
import "./TicketBuy.css";

const UserBuyTicket = () => {
  return (
    <div className="col-12 col-md-8 mr-auto ml-auto pt-5">
      <div className="fontStyle ">
        <h2 className="col-12">Compra de Boleto</h2>

        <div
          className="col-12"
          style={{ marginTop: "60%", fontFamily: "monospace" }}
        >
          Gestionar compra del boleto
        </div>
        <Button floating contactPhone="50769825076"></Button>   
      </div>
    </div>
  );
};

export default UserBuyTicket;
