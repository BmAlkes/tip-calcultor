import { Dispatch } from "react";
import { OrderActions } from "../reducers/order-reducer";

type TipPercentageForm = {
  dispatch: Dispatch<OrderActions>;
  tip?: number;
};

const TipPorcentage = ({ dispatch }: TipPercentageForm) => {
  const tipOptions = [
    {
      id: "tip-10",
      value: 0.1,
      label: "10%",
    },
    {
      id: "tip-20",
      value: 0.2,
      label: "20%",
    },
    {
      id: "tip-50",
      value: 0.5,
      label: "50%",
    },
  ];
  return (
    <div>
      <h3 className="font-black">Tip:</h3>
      <form>
        {tipOptions.map((tip) => (
          <div key={tip.id} className="flex gap-2">
            <label htmlFor={tip.id}>{tip.label}</label>
            <input
              type="radio"
              name="tip"
              id={tip.id}
              value={tip.value}
              onChange={(e) =>
                dispatch({
                  type: "add-tip",
                  payload: { value: +e.currentTarget.value },
                })
              }
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default TipPorcentage;
