import { useRouter } from 'next/router';
import Link from 'next/link';
import { paths } from './consts/paths';
import styles from './Navigation.module.scss';


export const Navigation:React.FC = () => {

    const route = useRouter();

    console.log('route: ', route);

    return (
        <nav className={styles.nav}>
            {paths.map(({id, title, path}) => (
                <Link key={id} href={path} className={styles.navLink}>{title}</Link>
            ))}
        </nav>
    );
}
