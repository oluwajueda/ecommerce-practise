import React, {useState, useContext, useEffect} from 'react'


const AppContext = React.createContext()

const url = 'https://fakestoreapi.com/products';


const AppProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState(0)
    





const FetchItems = async () => {

    const response = await fetch(url);
    const items = await response.json();
    setItems(items)
    console.log(items)
}


useEffect(()=>{
    FetchItems();
},[])


return (

 <AppContext.Provider value={{
     items,
     setItems,
     input,
     setInput,

    
 }}>
{children}
 </AppContext.Provider>


)

}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}