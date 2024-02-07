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


  const [showPassword, setShowPassword] = useState(false)
  const [isFocused, setIsFocused] = useState(false);
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const onChangeEvent = (value) => {
    //if (AllowIfIsNumber(value)) onChange(value)
  }

  return (
    <div className={className}>
      <div className="flex flex-col relative text-primarytext">
        <div className="flex flex-row justify-between items-center">
          <div className={`inline-block text-xs font-semibold relative mb-1 ${customClassname}`}>
            ALLERGY DESCRIPTION
            {required && <span className='-right-4 -top-3 left-auto text-manhattan700 absolute text-sm' >*</span>}
          </div>
          {passwordIcon && <div className="h-5 w-5 mr-3">
            {(
              <button
                tabIndex={-1}
                type="button"
                className="absolute bottom-2 h-6 w-6 bg-white "
                onClick={() => setShowPassword(!showPassword)}
              >
                {/* <img src={showPassword ? showPasswordIcon : hidepaswordIcon} alt="notes" /> */}
              </button>
            )}
          </div>}
        </div>
        <input
          placeholder={placeHolder}
          value={value}
          //type={!password || showPassword ? "text" : "password"}
          type={type} 
          autoComplete={autoComplete ? "true" : "cc-given-name"}
          maxLength={maxlength}
          className={classNames(
            'px-2',
            (onError || isFocused) ? ' border border-secondarylight no-box-shadow' : 'border border-t-1 border-brsolidbtn custom-shadow',
            ' block w-full rounded-md  focus:outline-none  sm:text-sm focus:border  md:min-w-150',
            isFocused && ''
          )}
          style={{
            minHeight: '44px',
          }}
          onChange={(event) => AllowOnlyNumber ? onChangeEvent(event?.target?.value) : onChange(conditionvalue == true ? event?.target?.value : event)}
          onFocus={() => {
            setIsFocused(true);
            if (onFocus) onFocus();
          }}
          onBlur={(event) => {
            setIsFocused(false);
            // if (onError) onError();
            onBlur && onBlur(event)
          }}
          readOnly={readOnly}
          pattern={pattern}
          id={names}
          min={0} step={step} 
          ref={inputRef}
        />
        <div className='validateError'>{validateError}</div>
        {hideicon === true &&
          <> <span className='custom-upicon'  onClick={handleIncrement}/>
            <span className='custom-downicon' onClick={handleDecrement}  />
          </>
        }
       
        {requiredall && <span className='-right-2 top-4 left-auto text-manhattan700  absolute text-sm' >*</span>}
      </div>
      {helperText && <span className='block text-manhattan700 text-xs m-1'>{helperText}</span>}

    </div>
  );
}
//export default TextInput;
