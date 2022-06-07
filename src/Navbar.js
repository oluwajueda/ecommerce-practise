import React from 'react'
import { useGlobalContext } from './context'

const Navbar = () => {

    const {amount,input} = useGlobalContext
  return<section>
  
  <nav>
    
    {amount?<p>{input}</p> : null} 
  
  </nav>
  </section>
}

export default Navbar
