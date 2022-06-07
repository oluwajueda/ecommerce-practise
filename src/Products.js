import React, {useState} from 'react'
import { useGlobalContext } from './context'
import './index.css'
const Products = () => {

  const [amount, setAmount] = useState(false)
  const {items,input,setInput,} = useGlobalContext()


const addCart = (e) => {
  
  setAmount(true)
}

const increase = () => {
    setInput(input + 1)
    setAmount(false)
}
const decrease = () => {
    setInput(input - 1)
    setAmount(false)
}

  return <section className='product-display'>
    <div className='products'>
      {items.map((item)=>{
        const {id,image,title,description,price} = item
        return<main>
          <div className='single-produts' key={id}>
          <img className='image' src={image} alt=''/>
          <h3>{title}</h3>
          <p>{description}</p>
          <h3>{price}</h3>
           </div>
          <div>
             {amount?<p>{input}</p> : null} 
            {/* <input className='input' type='number' value={input}
            onChange={(e) => setInput(e.target.value)} /> */}
            <div>
              <p>{input}</p>
            </div>
            <button onClick={()=>increase(id)} className='btn-increase'>+</button>
            <button onClick={()=>decrease(id)} className='btn-decrease'>-</button>
          </div>
          <button onClick={()=>addCart(id)}>add to cart</button>
        </main>
      })}

    </div>

  </section>
}

export default Products