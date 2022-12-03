
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';


export const getStaticProps = async () => {
  try {
    const data = await(await fetch(`${process.env.API_HOST}/socials`)).json();

  return {
    props: {
      socials: data.socials,
    }
  }
  } catch (e) {
    return {
      props: {
        socials: [],
      }
    }
  }
}

const Home:React.FC = ({socials}) => {

  console.log('socials: ', socials);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.wrapper}>
        <h2>Home</h2>
        <Image className={styles.pic} alt="404" src="/ape.png" width={300} height={300} />
        {socials.map(({icon, link}) => (
          <div key={icon}>{icon}: {link}</div>
        ))}
      </div>
    </>
  )
}

export default Home;
