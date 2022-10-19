import React, { useState } from "react";
import { usePrefs } from '../../components/prefs-context';
import './style.css';

const Check = ({checked, isVegan, onHandleCheck}) => {
  const { veganOnly, setVeganOnly } = usePrefs();
  
  const isEnabled=()=>{
    if(veganOnly)
      return isVegan;
    else return true;
  }

  const handleOnClick=()=>{
    if(isEnabled())
      onHandleCheck(!checked);
  }

  return (
    <button 
      className={isEnabled()?"check":"check--disabled"}
      onClick={handleOnClick}
    >
      {checked && isEnabled() ? '✓' : ''}
    </button>
  )
};

export default Check;
