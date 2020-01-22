import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { ingredientLabel: "Salad", type: "salad" },
  { ingredientLabel: "Bacon", type: "bacon" },
  { ingredientLabel: "Cheese", type: "cheese" },
  { ingredientLabel: "Meat", type: "meat" }
];

const BuildControls = props => (
  <div className="BuildControls">
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.ingredientLabel}
        ingredientLabel={ctrl.ingredientLabel}
        added={() => props.ingredientAdded(ctrl.type)}
      />
    ))}
  </div>
);

export default BuildControls;
