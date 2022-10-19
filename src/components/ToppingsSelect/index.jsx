import React, { useState } from "react";
import Topping from "../Topping";
import './style.css';

const ToppingsSelect = ({ toppings }) => {
  const [myToppings, setMyToppings] = useState(toppings);
  
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
    const newToppings = [...myToppings];
    newToppings[index].selected = checked;
    setMyToppings(newToppings);
  }

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {selectedAmount}, total price: {sum} Euro</p>
        
      <div className="toppings">
        {myToppings.map((topping,index) => (
          <Topping topping={topping} key={topping.name} onChecked={(checked)=>handleSelect(index,checked)}/>
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
