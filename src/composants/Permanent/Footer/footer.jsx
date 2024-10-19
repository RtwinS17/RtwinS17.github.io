import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-stone-300 py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Première partie */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contactez-nous</h4>
            <p className="mb-2">Email : nationsounds@epsi.fr</p>
            <p className="mb-2">Tel : +33 (0)3 20 21 22 23 24 </p>
            <p>Addresse : 123 Rue du son, 75000 Paris , France</p>
          </div>
          {/* Deuxième partie */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
              <li><a href="/conditions" className="hover:underline">Conditions Générales et RGPD</a></li>
            </ul>
          </div>
          {/* Troisième partie */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className='flex flex-col'>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com" className="hover:text-gray-400"><FontAwesomeIcon icon={faFacebook} /> </a>
                <a href="https://www.x.com" className="hover:text-gray-400"><FontAwesomeIcon icon={faXTwitter} /></a>
                <a href="https://www.instagram.com" className="hover:text-gray-400"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://www.linkedin.com" className="hover:text-gray-400"><FontAwesomeIcon icon={faLinkedin} /></a>
              </div>
              
                <p className='mt-4 text-sm'>&copy; 2024 HRCT. All rights reserved.</p>
            
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
