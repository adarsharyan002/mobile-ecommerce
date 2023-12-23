import React, { ReactNode } from 'react';
import PaymentCard from './PaymentCard';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  price:number;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose,price}) => {



  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className=" p-6 rounded  z-10">
       
        {/* <h2 className="text-xl font-bold mb-4">Confirm the order: ${price}</h2> */}
        <div className='w-full flex justify-center items-center content-center'>
          <PaymentCard onClose={onClose} price={price}/>
        {/* <button className="bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full"
          
          >Confirm</button>
           <button className="bg-red-600 text-white font-semibold py-3 px-16 rounded-xl h-full"
          onClick={onClose}
          >Cancel</button> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
