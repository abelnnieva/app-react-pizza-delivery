import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", null, [
    React.createElement("h1", null, props.name),
    React.createElement("p", null, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", null, [
    React.createElement("h1", null, "Padre Gino’s"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "Mozzarella Cheese, Pepperoni",
    }),
    React.createElement(Pizza, {
      name: "The Margherita Pizza",
      description: "Fresh Mozzarella, Basil",
    }),
    React.createElement(Pizza, {
      name: "The BBQ Chicken Pizza",
      description: "BBQ Sauce, Chicken, Red Onions",
    }),
    React.createElement(Pizza, {
      name: "The Veggie Pizza",
      description: "Bell Peppers, Onions, Mushrooms",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
