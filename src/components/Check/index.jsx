import React, { useState } from "react";
import './style.css';

const Check = ({checked,onHandleCheck}) => {
  return (
    <button 
      className="check"
      onClick={()=>onHandleCheck(!checked)}
    >
      {checked ? '✓' : ''}
    </button>
  )
};

export default Check;
