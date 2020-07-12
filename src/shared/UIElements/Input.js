import React, { useReducer, useEffect } from "react";

import "./Input.css";
import { validate } from "../validators";

// To feed the reducer:
const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        //   Copy old state:
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

// ?
// const touchHandler = () => {
//   dispatch({ type: "TOUCH" });
// };

const Input = (props) => {
  // The reducer that receive state and update
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isTouched: false,
    isValid: props.initialValid || false,
  });

  //   Runs logic when some render changes (if props or inputState changes) this function run
  const { id, onInput } = props; // Load from props
  const { value, isValid } = inputState;

  // useEffect runs logic wnd something change
  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  // change data handler:
  const changeHandler = (event) => {
    //   Store the value and update state:
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const generateMonths = () => {
    let options = [];

    for (let i = 0; i < 13; i++) {
      if (i === 0) {
        options.push(
          <option key={i} defaultValue>
            {"  "}
          </option>
        );
      }
      if (i !== 0 && i < 10) {
        options.push(<option key={i}>0{i}</option>);
      }
      if (i !== 0 && i > 10) {
        options.push(<option key={i}>{i}</option>);
      }
    }
    return options;
  };

  const generateYears = () => {
    let options = [];

    for (let i = 19; i < 26; i++) {
      if (i === 19) {
        options.push(
          <option key={i} defaultValue>
            {"  "}
          </option>
        );
      } else {
        options.push(<option key={i}>{i}</option>);
      }
    }
    return options;
  };

  //   Touch handler to throw errors only if touch input:
  const touchHandler = () => {
    dispatch({ type: "TOUCH" });
  };

  // Create an form element (input AND textarea):
  var element;
  if (props.element === "input") {
    element = (
      <input
        className="form-control p-0"
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onBlur={touchHandler}
        onChange={changeHandler}
        value={inputState.value}
      />
    );
  }

  if (props.element === "expMonth") {
    element = (
      <select
        id={props.id}
        className="form-control p-0"
        onChange={changeHandler}
        placeholder={props.placeholder}
      >
        {generateMonths()}
      </select>
    );
  }

  if (props.element === "expYear") {
    element = (
        <select
        className="form-control p-0"
          id={props.id}
          type={props.type}
          onChange={changeHandler}
          placeholder={props.placeholder}
        >
          {generateYears()}
        </select>
    );
  }

  if (props.element === "textarea") {
    element = (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onBlur={touchHandler}
        onChange={changeHandler}
        value={inputState.value}
      />
    );
  }
  return (
    <div
      className={`form-group ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      {element}
      <label className="form-control-placeholder p-0" htmlFor={props.id}>
        {props.label}
      </label>
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
