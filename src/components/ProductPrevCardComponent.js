import React, { useEffect, useState } from 'react';
import Button from './Button';
import styles from '../styles/productPrevCard.module.scss';
import imgMobile from '../assets/images/image-product-mobile.jpg';
import imgDesktop from '../assets/images/image-product-desktop.jpg';
import IconCart from './IconCart';

function ProductPrevCardComponent() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return (
    <div className={styles.cardContainer}>
      <div className={styles.left}>
        <div className={styles.imageContainer}>
          <img src={width > 400 ? imgDesktop : imgMobile} alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h2>Perfum</h2>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier Polge,
          Perfumer-Creator for the House of CHANEL.
        </p>
        <div className={styles.price}>
          <span className={styles.actualPrice}>$149.99</span>
          <span className={styles.priceBefore}>$169.99</span>
        </div>
        <Button className={styles.addBtn}><IconCart /> Add to Cart</Button>
      </div>

      {/* <div class="attribution">
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
  Coded by <a href="#">Your Name Here</a>.
</div> */}
    </div>
  );
}

export default ProductPrevCardComponent;
