import React from 'react';
import { Navigation } from '../Navigation/Navigation';
import styles from './Header.module.scss';

interface IHeader {
} 

const Header:React.FC<IHeader> = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Sad Ape Brain</h1>
      <h2 className={styles.subTitle}>Art of dark side of Humanity</h2>

      <Navigation />
    </header>
  );
}

export default Header;
