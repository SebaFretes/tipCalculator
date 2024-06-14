import { useState } from "react";
import { Menu } from './components/menu';

const App = () => {

  const [order, setOrder] = useState([]);

  return (
    <>
      <div className="bg-slate-400 py-5">
        <h1 className="text-center text-4xl font-black">Tip and Order Calculator</h1>
      </div>

      <main className="max-w-6xl mx-auto py-10 grid md:grid-cols-2">
        <div className="space-y-1">
          <h2 className="text-4xl font-bold pb-4">Menu</h2>
          <Menu order={order} setOrder={setOrder}/>
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
                    <p className="text-lg">{item.name} - ${item.price}</p>
                    <p className="font-black">{item.quantity} {item.name} - ${item.price * item.quantity}</p>
                  </div>
                  <button onClick={() => console.log('click')} className="bg-red-600 h-8 w-8 rounded-full text-white font-black">X</button>
                </div>
              ))
            )
            }
          </div>
        </div>
      </main>

    </>
  )
}

export default App
