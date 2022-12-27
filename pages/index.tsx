
import Head from 'next/head';
import { Hello } from '../components/Hello/Hello';
import styles from '../styles/Home.module.scss';


const Home:React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title> 
      </Head>
      <div className={styles.wrapper}>
        <Hello />
      </div>
    </>
  )
}

export default Home;
