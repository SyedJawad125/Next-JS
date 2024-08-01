import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import logo from '../public/images/logo5.jpg'; // Update path according to your project structure
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import CartContext from '../context/CartContext'; 
// import HoverBox from './HoverBox';
import styles from '../styles/Navbar.module.css'; // Assume you have a CSS module

const Navbar = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(router.pathname);
//   const { cart } = useContext(CartContext);
  const [hovering, setHovering] = useState(false);

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };

  const handleClick = () => {
    router.push('/addtocartpage');
  };

  const sampleProducts = [
    { id: 1, img1: '1.jpg', name: 'Leather Bag' },
    { id: 2, img2: '2.jpg', name: 'Pent Coat' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <Link href="/">
          <a className={styles.navbarBrand}>
            <Image src={logo} alt="Logo" className={styles.navbarLogo} />
          </a>
        </Link>
      </div>
      <div className={styles.navbarLinks}>
        <Link href="/">
          <a className={activeLink === '/' ? styles.active : ''} onClick={() => handleLinkClick('/')}>
            Home
          </a>
        </Link>
        <Link href="/about">
          <a className={activeLink === '/about' ? styles.active : ''} onClick={() => handleLinkClick('/about')}>
            About
          </a>
        </Link>
        <Link href="/services">
          <a className={activeLink === '/services' ? styles.active : ''} onClick={() => handleLinkClick('/services')}>
            Services
          </a>
        </Link>
        <Link href="/publiccategory">
          <a className={activeLink === '/publiccategory' ? styles.active : ''} onClick={() => handleLinkClick('/publiccategory')}>
            Categories
          </a>
        </Link>
        <div
          className={styles.navbarCheck}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          style={{ position: 'relative' }}
        >
          <Link href="/new_arrival">
            <a className={activeLink === '/new_arrival' ? styles.active : ''} onClick={() => handleLinkClick('/new_arrival')}>
              New In
            </a>
          </Link>
          {/* {hovering && <HoverBox products={sampleProducts} />} */}
        </div>
        <Link href="/allpublicproducts">
          <a className={activeLink === '/allpublicproducts' ? styles.active : ''} onClick={() => handleLinkClick('/allpublicproducts')}>
            Products
          </a>
        </Link>
        <Link href="/product_vertical_slider">
          <a className={activeLink === '/product_vertical_slider' ? styles.active : ''} onClick={() => handleLinkClick('/product_vertical_slider')}>
            Prod Vert Slider
          </a>
        </Link>
        <Link href="/contact">
          <a className={activeLink === '/contact' ? styles.active : ''} onClick={() => handleLinkClick('/contact')}>
            Contact
          </a>
        </Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
