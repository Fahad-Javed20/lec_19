
import './App.css'
import ProductList from './components/ProductList'
import type { ProductType } from './types/ProductType'

function App() {

  const Products:ProductType[] = [{
    id:1,
    image:"https://images.unsplash.com/photo-1586400928533-da0dbdca07fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNob2tvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    price:2000,
    isNew:true,
  },
  {
    id:2,
    image:"https://images.unsplash.com/photo-1673886089869-a9b1c71a8138?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGNob2tvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    price:3000,
    isNew:false,
  },{
    id:3,
    image:"https://images.unsplash.com/photo-1597757288540-e00dda4014db?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hva29sYXRlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    price:1000,
    isNew:true,
  },
  {
    id:4,
    image:"https://images.unsplash.com/photo-1663100143548-1555dcfd62b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNob2tvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    price:5000,
    isNew:false,
  }
]
  

  return (
    <>
      <ProductList FoodItems = {Products}/>
    </>
  )
}

export default App
