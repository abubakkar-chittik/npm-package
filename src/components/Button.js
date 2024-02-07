import React from "react";
import "./style.css";
import "./index.css";

export const Button = ({onClick,backgroundColor,size,label,width,textColor,hoverBg,disabled,style,autoFocus,...props }) => {
  console.log("props",props);
  return (
    <button
      type="button"
      className={["inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm", 
                 `storybook-button--${size}`,`${backgroundColor}`,`${hoverBg}`,`${textColor}`].join(' ')}
      //style={backgroundColor && { backgroundColor }}
      {...props}
      disabled={disabled}
      onClick={onClick}
      style={style}
      autoFocus={autoFocus}
    >
      {label}
    </button>
  );
};

