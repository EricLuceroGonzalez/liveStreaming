import React from "react";

import Button from "../video/components/Button";
import "./TicketBuy.css";
import PaymentForm from "./PaymentForm";

const UserBuyTicket = () => {
  return (
    <div className="col-12 col-md-8 mr-auto ml-auto pt-2">
      <div className="fontStyle ">
        <h2 className="col-12">Compra de Boleto</h2>
        <PaymentForm />
        <Button floating contactPhone="50769825076"></Button>   
      </div>
    </div>
  );
};

export default UserBuyTicket;
