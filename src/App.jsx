import { Menu } from './components/menu';

const App = () => {

  return (
    <>
      <div className="bg-slate-400 py-5">
        <h1 className="text-center text-4xl font-black">Tip and Consumption Calculator</h1>
      </div>

      <main className="max-w-6xl mx-auto py-10 grid md:grid-cols-2">
        <div className="space-y-1">
          <h2 className="text-4xl font-bold">Menu</h2>
          <Menu />
        </div>
        <div>
          Consumo
        </div>
      </main>

    </>
  )
}

export default App
