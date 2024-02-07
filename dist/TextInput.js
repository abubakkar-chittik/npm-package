import React, { useState } from 'react';
import "./index.css";
export function TextInput(props) {
  const {
    label,
    className,
    onChange,
    value,
    password,
    AllowOnlyNumber,
    passwordIcon,
    loading,
    onFocus,
    error,
    onError,
    disabled,
    maxlength,
    placeHolder,
    nonEditable,
    required,
    helperText,
    pattern,
    autoComplete,
    onBlur,
    requiredall,
    names,
    conditionvalue,
    customClassname,
    type,
    hideicon,
    step,
    readOnly,
    validateError,
    handleIncrement,
    handleDecrement,
    inputRef
  } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  const onChangeEvent = value => {
    //if (AllowIfIsNumber(value)) onChange(value)
  };
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col relative text-primarytext"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row justify-between items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: `inline-block text-xs font-semibold relative mb-1 ${customClassname}`
  }, "ALLERGY DESCRIPTION", required && /*#__PURE__*/React.createElement("span", {
    className: "-right-4 -top-3 left-auto text-manhattan700 absolute text-sm"
  }, "*")), passwordIcon && /*#__PURE__*/React.createElement("div", {
    className: "h-5 w-5 mr-3"
  }, /*#__PURE__*/React.createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "absolute bottom-2 h-6 w-6 bg-white ",
    onClick: () => setShowPassword(!showPassword)
  }))), /*#__PURE__*/React.createElement("input", {
    placeholder: placeHolder,
    value: value
    //type={!password || showPassword ? "text" : "password"}
    ,
    type: type,
    autoComplete: autoComplete ? "true" : "cc-given-name",
    maxLength: maxlength,
    className: classNames('px-2', onError || isFocused ? ' border border-secondarylight no-box-shadow' : 'border border-t-1 border-brsolidbtn custom-shadow', ' block w-full rounded-md  focus:outline-none  sm:text-sm focus:border  md:min-w-150', isFocused && ''),
    style: {
      minHeight: '44px'
    },
    onChange: event => AllowOnlyNumber ? onChangeEvent(event?.target?.value) : onChange(conditionvalue == true ? event?.target?.value : event),
    onFocus: () => {
      setIsFocused(true);
      if (onFocus) onFocus();
    },
    onBlur: event => {
      setIsFocused(false);
      // if (onError) onError();
      onBlur && onBlur(event);
    },
    readOnly: readOnly,
    pattern: pattern,
    id: names,
    min: 0,
    step: step,
    ref: inputRef
  }), /*#__PURE__*/React.createElement("div", {
    className: "validateError"
  }, validateError), hideicon === true && /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("span", {
    className: "custom-upicon",
    onClick: handleIncrement
  }), /*#__PURE__*/React.createElement("span", {
    className: "custom-downicon",
    onClick: handleDecrement
  })), requiredall && /*#__PURE__*/React.createElement("span", {
    className: "-right-2 top-4 left-auto text-manhattan700  absolute text-sm"
  }, "*")), helperText && /*#__PURE__*/React.createElement("span", {
    className: "block text-manhattan700 text-xs m-1"
  }, helperText));
}
//export default TextInput;