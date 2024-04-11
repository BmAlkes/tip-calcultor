import { Dispatch, useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";
import { OrderActions } from "../reducers/order-reducer";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  dispatch: Dispatch<OrderActions>;
};

const OrderTotals = ({ order, tip, dispatch }: OrderTotalsProps) => {
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order]);

  const totalPayment = useMemo(() => tipAmount + subTotalAmount, [tip, order]);
  return (
    <>
      <div className="space-y-4">
        <h2 className="font-black">Total Tips:</h2>
        <p>
          Subtotal to pay :{" "}
          <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
        </p>
        <p>
          Tip : <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total to pay:{" "}
          <span className="font-bold">{formatCurrency(totalPayment)}</span>
        </p>
      </div>
      <button
        className="bg-sky-200 p-2 text-slate-700 rounded-md"
        onClick={() => dispatch({ type: "place-order", payload: "" })}
      >
        Empty consuption
      </button>
    </>
  );
};

export default OrderTotals;
