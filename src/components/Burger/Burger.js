import React from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  //REVIEW THIS CODE & WHAT IT'S DOING
  let transformedIngredients = [];
  for (const [ingredient, amount] of Object.entries(props.ingredients)) {
    for (let i = 0; i < amount; i++) {
      transformedIngredients.push(
        <BurgerIngredient key={ingredient + i} type={ingredient} />
      );
    }
  }
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  console.log(transformedIngredients);
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;

// const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
//   return [...Array(props.ingredients[igKey])].map((_, i) => {
//     return <BurgerIngredient key={(igKey = i)} type={igKey} />;
//   }); //returns an array with 2 elements
