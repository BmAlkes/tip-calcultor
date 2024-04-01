import { useState } from "react";
import { MenuItem, OrderItem } from "../types";

const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);
    if (itemExist) {
      const updateOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updateOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: MenuItem["id"]) => {
    const removeItem = order.filter((item) => item.id !== id);
    setOrder(removeItem);
  };

  const resetOrder = () => {
    setOrder([]);
  };
  console.log(order);
  return {
    addItem,
    tip,
    setTip,
    order,
    removeItem,
    resetOrder,
  };
};

export default useOrder;