import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  resetOrder: () => void;
};

const OrderTotals = ({ order, tip, resetOrder }: OrderTotalsProps) => {
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order]);
  console.log(subTotalAmount);

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
        onClick={() => resetOrder()}
      >
        Empty consuption
      </button>
    </>
  );
};

export default OrderTotals;
