import { Dispatch } from "react";
import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";
import { OrderActions } from "../reducers/order-reducer";
type OrderContentsProps = {
  order: OrderItem[];
  dispatch: Dispatch<OrderActions>;
};

const OrderContents = ({ order, dispatch }: OrderContentsProps) => {
  return (
    <div>
      <h2 className="text-4xl font-thin text-center">Consumption</h2>
      <div className="space-y-3 mt-5">
        {order.length === 0 ? (
          <p className="text-center ">The order is empty</p>
        ) : (
          order.map((orderItem) => (
            <div
              key={orderItem.id}
              className="flex justify-between items-center py-5 border-t border-gray-300 last-of-type:border-b"
            >
              <div>
                <p className="text-lg">
                  {orderItem.name} -{formatCurrency(orderItem.price)}
                </p>
                <p className="font-semibold">
                  Quantity:{orderItem.quantity} -{" "}
                  {formatCurrency(orderItem.price * orderItem.quantity)}
                </p>
              </div>
              <button
                className="bg-red-600 h-8 w-8 rounded-md text-white font-semibold "
                onClick={() =>
                  dispatch({
                    type: "remove-item",
                    payload: { id: orderItem.id },
                  })
                }
              >
                x
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrderContents;
