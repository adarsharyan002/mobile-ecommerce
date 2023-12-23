import React, { ReactNode, useState } from 'react';
import PaymentCard from './PaymentCard';
import Link from 'next/link';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  price:number;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose,price}) => {

  const [paymentDone,setPaymentDone] = useState(false)



  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className=" p-6 rounded  z-10">
       
        {/* <h2 className="text-xl font-bold mb-4">Confirm the order: ${price}</h2> */}
        <div className='w-full flex justify-center items-center content-center'>
          {!paymentDone?<PaymentCard onClose={onClose} price={price} setPaymentDone={setPaymentDone}/>:<div className='bg-white flex flex-col w-full p-20 rounded-md text-green-400'>
          Payment Successful
          <Link className='text-blue-300' href={'/'}>Buy more products</Link>
          </div>
}
        
          
        </div>
      </div>
    </div>
  );
};

export default Modal;
