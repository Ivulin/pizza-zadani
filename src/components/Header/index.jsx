import React, { useState } from "react";
import './style.css';

const Header=({veganState,setVeganState})=>{
    return(
        <header>
          <div className="pizza" />
          <h1>Build your own pizza</h1>
          <div>
            Vegan pizza: <button className={veganState?"on":"off"} onClick={()=>setVeganState(!veganState)}>{veganState ? '✓' : 'x'}</button>
          </div>
        </header>
    );
};

export default Header;