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

export const TipForm = ({setTip}) => {

  return (
    <div>
        <h3 className="font-black text-2xl">Tip</h3>
        <form>
            {tipOptions.map(tip => (
                <div key={tip.id} className="flex gap-2">
                    <label>
                        {tip.label}
                    </label>
                    <input id={tip.id} type="radio" name="tip" value={tip.value} onChange={e => setTip(e.target.value)}></input>
                </div>
            ))}
        </form>
    </div>
  )
}
