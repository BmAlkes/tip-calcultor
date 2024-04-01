import MenuItemLoop from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPorcentage from "./components/TipPorcentage";

import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
  const { addItem, order, removeItem, resetOrder, setTip, tip } = useOrder();

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-light text-slate-50">
          Tips and consumption calculator
        </h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 ">
        <div className="p-5">
          <h2 className="text-4xl font-thin text-center">Menu</h2>
          <div className="space-y-3 p-2">
            {menuItems.map((item) => (
              <MenuItemLoop key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="border-2 border-dashed border-slate-300 p-5 rounded-lg space-y-10 ">
          <OrderContents order={order} removeItem={removeItem} />
          <TipPorcentage setTip={setTip} />
          <OrderTotals order={order} tip={tip} resetOrder={resetOrder} />
        </div>
      </main>
    </>
  );
}

export default App;
