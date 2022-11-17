import React from 'react';
import Link from 'next/link';
import { AiFillHome, AiFillInstagram, AiFillMail, AiFillFacebook } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Matices Shop | All rights reserverd.</p>
      <h4>Contactanos en cualquier lugar </h4>
      <p className="icons">
        <Link href="https://www.instagram.com/pelu_matices/" target="_blank">
          <AiFillInstagram />
        </Link>
        <Link
          href="https://www.facebook.com/people/Peluquer%C3%ADa-MATICES/100063723691220/"
          target="_blank"
        >
          <AiFillFacebook />
        </Link>
        <Link href="https://iconencasa.com/" target="_blank">
          <AiFillHome />
        </Link>
        <Link href="mailto:pelumaticeselche@hotmail.com" target="_blank">
          <AiFillMail />
        </Link>
      </p>
    </div>
  );
}

export default Footer;
