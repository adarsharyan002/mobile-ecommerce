'use client'

import { createContext, ReactNode, useState, useEffect } from "react";
import axios from "axios";

interface ContextProps {
  children: ReactNode;
}

interface FetchDataProviderProps {
  children: ReactNode;
}

interface Data {
  _id: string;
  name: string;
  price: number;
  // imgurl: string;
  warranty: string;
  // Define your data structure here based on the response
}

interface ProductData extends Data {
  // Add more properties as needed for a single product
}

const context = createContext<any>(null);

const FetchDataProvider = ({ children }: FetchDataProviderProps) => {
  const [data, setData] = useState<Data[] | null>(null);
  const [singleProduct, setSingleProduct] = useState<ProductData | null>(null);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://mobile-ecommerce-012n.onrender.com/api/v1/products/posts");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSingleProduct = async (id: string) => {
    try {
      const res = await axios.get(`https://mobile-ecommerce-012n.onrender.com/api/v1/products/posts/${id}`);
      setSingleProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <context.Provider value={{ data, singleProduct, fetchSingleProduct }}>
      {children}
    </context.Provider>
  );
};

export { context, FetchDataProvider };
