"use client"
import  { useState } from 'react';
import { products } from '../data/ProductData';
import Modal from '../Components/Modal';

interface Images {
  img1: string;
  img2: string;
  img3: string;
  img4: string;
}

type MyParams = {
    params: {
        id:number;
    };
  };

const ProductDetails: React.FC<MyParams> = ({params}) => {
 

    const {id,name,price,imgurl,date,desc,warranty,place}=products[params.id-1];

    const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
    
    

  const [images, setImages] = useState<Images>({
    img1: imgurl,
    img2: imgurl,
    img3: imgurl,
    img4: 'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
  });

  const [activeImg, setActiveImage] = useState(images.img1);
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="max-w-6xl mx-auto p-8">
         <Modal price={quantity<=0?price:price*quantity} isOpen={isModalOpen} onClose={handleCloseModal}/>
    <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
      <div className="flex flex-col gap-6 lg:w-2/4">
        <img src={activeImg} alt="" className="w-full h-full aspect-square object-cover rounded-xl" />
        <div className="flex flex-row justify-between h-24">
          <img src={images.img1} alt="" className="w-24 h-24 rounded-md cursor-pointer" onClick={() => setActiveImage(images.img1)} />
          <img src={images.img2} alt="" className="w-24 h-24 rounded-md cursor-pointer" onClick={() => setActiveImage(images.img2)} />
          <img src={images.img3} alt="" className="w-24 h-24 rounded-md cursor-pointer" onClick={() => setActiveImage(images.img3)} />
          <img src={images.img4} alt="" className="w-24 h-24 rounded-md cursor-pointer" onClick={() => setActiveImage(images.img4)} />
        </div>
      </div>
      {/* ABOUT */}
      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          {/* <span className="text-violet-600 font-semibold">Special Sneaker</span> */}
          <h1 className="text-3xl font-bold">{name}</h1>
        </div>
        <p className="text-gray-700">
            {desc}
        </p>
        <h6 className="text-2xl font-semibold">$ {quantity<=0?price:price*quantity}</h6>
        <div className="flex flex-row items-center gap-12">
          <div className="flex flex-row items-center">
            <button className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl" onClick={() => setQuantity(prev => prev - 1)}>-</button>
            <span className="py-4 px-6 rounded-lg">{quantity}</span>
            <button className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl" onClick={() => setQuantity(prev => prev + 1)}>+</button>
          </div>
          <button className="bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full"
          onClick={handleOpenModal}
          >Buy Now</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetails;
