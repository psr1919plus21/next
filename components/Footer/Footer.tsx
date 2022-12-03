import React from 'react';

import styles from './Footer.module.scss';

interface IFooter {
} 

const Footer:React.FC<IFooter> = () => {
  return (
    <div className={styles.footer}>
      <h6>sad ape brain © 2022</h6>
    </div>
  );
}

export default Footer;
