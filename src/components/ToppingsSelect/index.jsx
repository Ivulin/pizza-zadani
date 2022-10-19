import React, { useState } from "react";
import Topping from "../Topping";
import './style.css';

const ToppingsSelect = ({ toppings,setToppings }) => {
  let selectedAmount = 0;
  let sum = 0;

  toppings.forEach((topping) => {
    if(topping.selected)
    {
      selectedAmount += 1;
      sum += topping.price;
    }
  });

  const handleSelect = (index,checked)=>{
    const newToppings = [...toppings];
    newToppings[index].selected = checked;
    setToppings(newToppings);
  }

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {selectedAmount}, total price: {sum} Euro</p>
        
      <div className="toppings">
        {toppings.map((topping,index) => (
          <Topping topping={topping} key={topping.name} onChecked={(checked)=>handleSelect(index,checked)}/>
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
