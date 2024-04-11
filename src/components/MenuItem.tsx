import { Dispatch } from "react";
import { OrderActions } from "../reducers/order-reducer";
import { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
  dispatch: Dispatch<OrderActions>;
};

const MenuItemLoop = ({ item, dispatch }: MenuItemProps) => {
  return (
    <button
      className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded shadow-lg transform transition-all duration-500 ease-in-out hover:scale-90 hover:brightness-110 hover:animate-pulse active:animate-bounce w-full p-2 flex justify-between"
      onClick={() => dispatch({ type: "add-item", payload: { item } })}
    >
      <p>{item.name}</p>
      <p className="font-semibold">${item.price}</p>
    </button>
  );
};

export default MenuItemLoop;
