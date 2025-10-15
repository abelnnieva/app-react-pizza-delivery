import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino’s - Order Now</h1>
      <Pizza name="The Pepperoni Pizza" description="Mozzarella Cheese, Pepperoni" image="/public/pizzas/bbq_ckn.webp" />
      <Pizza name="The Margherita Pizza" description="Fresh Mozzarella, Basil" image="/public/pizzas/big_meat.webp" />
      <Pizza name="The BBQ Chicken Pizza" description="BBQ Sauce, Chicken, Red Onions" image="/public/pizzas/brie_carre.webp" />
      <Pizza name="The Veggie Pizza" description="Bell Peppers, Onions, Mushrooms" image="/public/pizzas/calabrese.webp" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
