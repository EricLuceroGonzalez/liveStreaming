import React from "react";
import { Link } from "react-router-dom";

import whatsappLogo from "../../assets/WhatsApp_Logo_1.png";
import "./Button.css";

const Button = (props) => {
  // If have href prop
  if (props.href) {
    return (
      <a
        className={`button button--${props.size || "default"} ${
          props.inverse && "button--inverse"
        } ${props.whatsapp && "button--whatsapp"}`}
        href={props.href}
        target="_blank"
      >
        {props.children}
      </a>
    );
  }
  if (props.floating) {
    return (
      <a
        className={`button ${props.inverse && "button--inverse"} ${
          props.floating && "button--float"
        }`}
        href={`https://api.whatsapp.com/send?phone=${props.contactPhone}&text=Hola,%20me%20gustaria%20comprar%20un%20boleto!`}
        target="_blank"
      >
        <img
          className="image-logo"
          src={whatsappLogo}
          alt="whatsapp logo"
        ></img>
      </a>
    );
  }
  // If have to prop
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`button button--${props.size || "default"} ${
          props.inverse && "button--inverse"
        } ${props.buyTicket && "button--buyTicket"}  col-12 col-sm-10`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`button button--${props.size || "default"} ${
        props.inverse && "button--inverse"
      } ${props.danger && "button--danger"}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
