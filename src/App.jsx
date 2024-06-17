import { useState } from "react";
import { Menu } from './components/Menu';
import { TipForm } from "./components/TipForm";

const App = () => {

  const [order, setOrder] = useState([]);
  const [tip, setTip] = useState(null);

  const deleteOrder = (item) => {
    const orderItem = order.filter(elem => (elem.id !== item.id));
    setOrder(orderItem);
  };

  const totalBeforeTip = () => {
    const totalOrder = order.reduce((total, item) => total + (item.quantity * item.price), 0);
    return totalOrder.toFixed(2);
  };

  const tipAmount = () => {
    const total = parseFloat(totalBeforeTip());
    return (total * tip).toFixed(2);
  };

  const totalWTip = () => {
    const total = parseFloat(totalBeforeTip());
    return (total + (total * tip)).toFixed(2);
  };

  const sendOrder = () => {
    setOrder([]);
    setTip(null);
  };

  return (
    <>
      <div className="bg-slate-400 py-5">
        <h1 className="text-center text-4xl font-black">Tip and Order Calculator</h1>
      </div>

      <main className="max-w-6xl mx-auto py-10 grid md:grid-cols-2">
        <div className="space-y-1">
          <h2 className="text-4xl font-bold pb-4">Menu</h2>
          <Menu order={order} setOrder={setOrder} />
        </div>

        <div className='border border-dashed border-slate-300 p-5 mx-6 rounded-lg space-y-10'>
          <h2 className='font-black text-4xl'>Order</h2>
          <div className='space-y-3 mt-5'>
            {order.length === 0 ?
              <p className="text-center">There's no order yet</p>
              : (
                order.map(item => (
                  <div key={item.id} className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b">
                    <div>
                      <p className="text-lg">{item.name} - ${item.price.toFixed(2)}</p>
                      <p className="font-black">{item.quantity} {item.name} - ${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <button onClick={() => deleteOrder(item)} className="bg-red-600 h-8 w-8 rounded-full text-white font-black">X</button>
                  </div>
                ))
              )

            }
          </div>
          <div>
            <div className="space-y-3">
              <div>
                <TipForm setTip={setTip} tip={tip} />
              </div>
              <div className="space-y-3">
                <h3 className="font-black text-2xl">Total and Tip</h3>
                <p>Total Order:
                  <span className="font-bold"> ${totalBeforeTip()}</span>
                </p>
                <p>Tip:
                  <span className="font-bold"> ${tipAmount()}</span>
                </p>
                <p>Total to pay:
                  <span className="font-bold"> ${totalWTip()}</span>
                </p>
              </div>
              <button
                className="w-full bg-slate-400 p-3 uppercase mt-10 font-bold text-white disabled:opacity-30 cursor-pointer"
                disabled={order.length === 0}
                onClick={sendOrder}>
                Send Order
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
