import React, { useState } from 'react'
import './App.css'
import myfavouritesnacks from './Data.json'

const App = () => {
  const [counts, setCounts] = useState(myfavouritesnacks);
  const [search, setSearch]= useState(counts);
  const plus = (id) => {
    setCounts(counts.map(i => i.id === id && i.count < i.limit ? { ...i, count: i.count + 1 } : i))
  }

  const minus = (id) => {
    setCounts(counts.map(i => i.id === id && i.count > 0 ? { ...i, count: i.count - 1 } : i))
  }
 
  return (
    <>
      <div className='nav'>
        <h1 className='h1'>My favourite snacks</h1>
        <input type="text" placeholder='Enter product' className='inp' />
      </div>
      <div className="products">
      {counts.map((snacks) => (
         <div key={snacks.id} className='display'>
          <h2>{snacks.name}</h2>
          <img src={snacks.img} alt={snacks.name} className='img' />
          <div className='flex'>
            <button onClick={() => plus(snacks.id)} className='button'>+</button>
            <h3>{snacks.count}</h3>
            <button onClick={() => minus(snacks.id)} className='button'>-</button>
          </div>
        </div>
    ))}
    </div>
    </>

  )
}

export default App