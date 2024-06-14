import { menuItems } from "../data/db";

export const Menu = ({order, setOrder}) => {

    const addItem = (item) => {
        const itemExist = order.find(elem => elem.id===item.id);

        if (!itemExist) {
            // console.log('no existe');
            setOrder([...order, { ...item, quantity: 1 }]);
        } else {
            // console.log('ya existe');
            setOrder(order.map(elem => 
                elem.id === item.id ? { ...elem, quantity: elem.quantity + 1 } : elem
            ));
        }
    }

    console.log(order);

    return (
        menuItems.map(item => (
            <div key={item.id}>
                <button onClick={() => addItem(item)} className="border-2 border-slate-400 hover:bg-slate-200 w-full p-3 flex justify-between">
                    <h1>{item.name}</h1>
                    <p className="font-black">${item.price}</p>
                </button>
            </div>
        )
        )
    )
}