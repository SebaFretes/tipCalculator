const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-15',
      value: .15,
      label: '15%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'skip',
      value: 0,
      label: 'Skip'
    },
  ]

const TipForm = ({setTip, tip}) => {

  return (
    <div>
        <h3 className="font-black text-2xl">Tip</h3>
        <form>
            {tipOptions.map(elem => (
                <div key={elem.id} className="flex gap-2">
                    <label>
                        {elem.label}
                    </label>
                    <input id={elem.id} type="radio" name="tip" value={elem.value} onChange={e => setTip(+e.target.value)} checked={elem.value === tip}></input>
                </div>
            ))}
        </form>
    </div>
  )
}

export default TipForm
