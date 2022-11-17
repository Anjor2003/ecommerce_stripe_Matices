import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs'
import { useRouter } from 'next/router';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);


  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill />
        </p>
        <h2>Gracias por su Orden!</h2>
        <p className='email-msg'>Compruebe la bandeja de su correo para el recibo.</p>
        <p className='description'>
          Si tiene alguna pregunta, envie un correo electronico a:
          <a className='email' href='mailto: anjor2003@hotmail.com'>anjor2003@hotmail.com</a>
        </p>
        <Link href="/">
          <button type='button' width="300px" className='btn'>
            Continue Comprando
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Success;
