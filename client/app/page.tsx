import Image from 'next/image'
import Navbar from './Components/Navbar'
import ProductGrid from './Components/ProductList'
import  {FetchDataProvider}  from './context/ContextProvider'

export default function Home() {
  return (
   
     <div className='p-4'>

      {/* Components */}
    
     <Navbar/>
     <ProductGrid/>
     
     
     </div>
  )
}
