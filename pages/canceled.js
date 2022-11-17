import React from 'react';
import Link from "next/link";
import { BsAlarmFill } from "react-icons/bs";


const Canceled = () => {
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsAlarmFill />
        </p>
        <h2>Sesion cacelada!</h2>
        <p className="description">
          Ha cencelado su pago, vuelva a comprobar el producto,le esperamos
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Comprando
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Canceled;
