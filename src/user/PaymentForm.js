import React, { useState, useEffect } from "react";
// import Cards from "react-credit-cards";
import "./PaymentForm.css";
import Input from "../shared/UIElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_EMAIL,
} from "../shared/validators";
import { useForm } from "../shared/hooks/form-hook";
import Card from "../shared/UIElements/Card";
const PaymentForm = () => {
  const [focus, setFocus] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cardType, setCardType] = useState("");
  const [formValid, setFormValid] = useState(false);

  // To manage multiple states (changing) as the title input and others inputs changing
  // INITIAL STATE -->> function copied to form-hooks
  // Initialize the form hook (as Places form) from here (it returns an array)
  const [formState, inputHandler] = useForm(
    {
      number: {
        value: "",
        isValid: false,
      },
      firstName: {
        value: "",
        isValid: false,
      },
      lastName: {
        value: "",
        isValid: false,
      },
      expMonth: {
        value: "",
        isValid: false,
      },
      expYear: {
        value: "",
        isValid: false,
      },
      cvv: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    let expDate;

    expDate = `${formState.inputs.expMonth.value}/${formState.inputs.expYear.value}`;
    setExpiry(expDate);
  }, [formState.inputs.expMonth.value, formState.inputs.expYear.value]);

  const clickHandler = async (e) => {
    if (cardType !== "") {
      setFormValid(true);
    }

    const formData = new FormData();
    formData.append("number", formState.inputs.number.value);
    formData.append("firstName", formState.inputs.firstName.value);
    formData.append("lastName", formState.inputs.lastName.value);
    formData.append("expMonth", formState.inputs.expMonth.value);
    formData.append("expYear", formState.inputs.expYear.value);
    formData.append("cvv", formState.inputs.cvv.value);

    e.preventDefault();

    console.log(formState.inputs.number.value);
    console.log(formState.inputs.expMonth.value);
    console.log(formState.inputs.expYear.value);
    console.log(formState.inputs.cvv.value);
    console.log(formData);
  };

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="card my-4 p-3">
            <div className="row main">
              <div className="col-12">
                <span>Checkout</span>
              </div>
            </div>

            <div>
              <label>Selecciona el tipo de tarjeta</label>
              <div className="row justify-content-center">
                <div
                  className={`col-2 mrow ${
                    cardType === "mastercard" && "cardType"
                  }`}
                  onClick={() => setCardType("mastercard")}
                >
                  <img
                    alt="mastercard logo"
                    src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                    width="45px"
                    height="45px"
                  />{" "}
                </div>
                <div
                  className={`col-2 mrow ${cardType === "visa" && "cardType"}`}
                  onClick={() => setCardType("visa")}
                >
                  <img
                    alt="visa logo"
                    src="https://img.icons8.com/color/48/000000/visa.png"
                    width="45px"
                    height="45px"
                  />{" "}
                </div>
              </div>
            </div>
            <form className="form-card" onSubmit={clickHandler}>
              <div className="d-flex flex-column justify-content-around">
                <div className="col-12">
                  <div className="d-flex row">
                    <div className="col-12">
                      <Input
                        id="email"
                        element="input"
                        type="email"
                        label="Correo"
                        validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
                        errorText="Introduce un correo valido"
                        onInput={inputHandler}
                        // onFocus={(e) => setFocus(e.target.name)}
                      ></Input>
                    </div>
                    <div className="col-12">
                      <Input
                        id="phone"
                        element="input"
                        type="phone"
                        label="Teléfono"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Introduce un teléfono valido"
                        onInput={inputHandler}
                      ></Input>
                    </div>

                    <div className="col-6">
                      <Input
                        id="firstName"
                        element="input"
                        type="text"
                        label="Nombre"
                        validators={[
                          VALIDATOR_REQUIRE(),
                          VALIDATOR_MAXLENGTH(25),
                        ]}
                        onInput={inputHandler}
                      />
                    </div>
                    <div className="col-6">
                      <Input
                        id="lastName"
                        element="input"
                        type="text"
                        label="Apellido"
                        validators={[
                          VALIDATOR_REQUIRE(),
                          VALIDATOR_MAXLENGTH(25),
                        ]}
                        onInput={inputHandler}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <Input
                    id="number"
                    element="input"
                    type="text"
                    label="Numero de tarjeta"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Introduce un numero valido"
                    onInput={inputHandler}
                    // onFocus={(e) => setFocus(e.target.name)}
                  ></Input>
                </div>
                <div className="col-12">
                  <div className="d-flex row">
                    <div className="col-sm-3 col-6 slctItem">
                      <Input
                        id="expMonth"
                        element="expMonth"
                        type="text"
                        label="Mes"
                        placeholder="Mes"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Introduce un nombre valido"
                        onInput={inputHandler}
                      ></Input>
                    </div>
                    <div className="col-sm-3 col-6 slctItem">
                      <Input
                        id="expYear"
                        element="expYear"
                        type="text"
                        label="Año"
                        placeholder="Mes"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Introduce un nombre valido"
                        onInput={inputHandler}
                      ></Input>
                    </div>
                  </div>
                </div>
                <div className="col-4 col-sm-3">
                  <Input
                    id="cvv"
                    element="input"
                    type="password"
                    label="CVV"
                    validators={[VALIDATOR_REQUIRE(), VALIDATOR_MAXLENGTH(3)]}
                    errorText="invalido"
                    onInput={inputHandler}
                  />
                </div>
              </div>

              <div className="row lrow mt-4 mb-3">
                <div className="col-sm-8 col-12">
                  <h3>Total:</h3>
                </div>
                <div className="col-sm-4 col-12">
                  <h5>&#36;4.99</h5>
                </div>
              </div>
              {/* Boton */}
              <div className="row mb-2">
                <div className="col-sm-12">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={!formState.isValid}
                  >
                    Pagar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Card
        cvc={formState.inputs.cvv.value}
        expiry={expiry}
        focused={focus}
        name={
          formState.inputs.firstName.value +
          " " +
          formState.inputs.lastName.value
        }
        number={formState.inputs.number.value}
        preview={true}
        issuer={cardType}
      />
    </React.Fragment>
  );
};

export default PaymentForm;
