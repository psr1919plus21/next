import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from './404.module.scss'

const Page404:React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  });

  return <>
    <h1 className={styles.title} >Page404 kurwa!</h1>
    <Image className={styles.pic} alt="404" src="/ape.png" width={300} height={300} />
  </>
}

export default Page404;
