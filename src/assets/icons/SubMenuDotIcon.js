import React from "react";


function SubMenuDotIcon(props) {
  const { className } = props;
  return (
    <svg className={className}  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="5" cy="12" r="1" />  <circle cx="12" cy="12" r="1" />  <circle cx="19" cy="12" r="1" /></svg>
  );
}

export default SubMenuDotIcon;
