'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
// import { products } from '../data/ProductData';
import { context } from "../context/ContextProvider";
import { useContext } from 'react';

interface Product {
  _id: string;
  name: string;
  price: number;
  // imgurl: string;
  warranty: string;
  // Add other properties if available
}

const ProductGrid = () => {

  const {data} = useContext(context);
  console.log(data)
  

  
  
  const [searchTerm, setSearchTerm] = useState('');
  const [products,setProducts]=useState<Product[]|null>(null)
 
  const [filteredProducts, setFilteredProducts] = useState<Product[] | undefined  | null>(products);
 
  
  useEffect(() => {
    setProducts(data); // Set products data initially
    setFilteredProducts(data); // Set filteredProducts initially
  
  }, [data]);
  
  
  

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered:Product[] | null | undefined = products?.filter((product:Product) =>
      product.name.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);


  };

  

  return (
    <div className="container mx-auto px-6">
      <div className="flex justify-center my-4">
        <div className='relative  max-w-lg mx-auto'>
        <input
           className=" w-full md:w-[32rem] border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
           type="text"
           placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-14">
        {filteredProducts?.map((item:Product, index:number) => (
           <Link key={index}  href={`/${item._id}`} >
           <div className="mx-2 w-72 lg:mb-0 mb-8 shadow-md hover:shadow-xl">
           <div>
               <img src='https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png' className="w-full h-44" />
           </div>
           <div className="bg-white">
               <div className="flex items-center justify-between px-4 pt-4">
                   <div>
                       <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmark" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                           <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                       </svg>
                   </div>
                   <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                       <p className="text-xs text-yellow-500">Featured</p>
                   </div>
               </div>
               <div className="p-4">
                   <div className="flex items-center justify-between">
                       <h2 className="text-lg font-semibold">{item.name}</h2>
                       {/* <h3 className="text-indigo-700 text-xl font-semibold">${item.price}</h3> */}
                       
                   </div>
                   {/* <p className="text-xs text-gray-600 mt-2">{item.desc}</p> */}
                  
                   <div className="flex items-center justify-between py-4">
                       {/* <h2 className="text-indigo-700 text-xs font-semibold">{item.place}</h2> */}
                       <h3 className="text-indigo-700 text-xl font-semibold">${item.price}</h3>
                   </div>
                   <div className="flex mt-2">
                       <div>
                           <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">{item.warranty}</p>
                       </div>
                       <div className="pl-2">
                           <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete box</p>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
