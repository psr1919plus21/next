import { useCallback, useState } from 'react';
import { clsJoin } from '../../helpers/clsJoin/clsJoin';
import styles from './Hello.module.scss';

export const Hello:React.FC = () => {
    const [startIntro, setStartIntro] = useState(false);
    const handleScroll = useCallback(() => {
        if (startIntro) {
            return;
        }

        setStartIntro(true);
        
    }, [startIntro]);

    return (
        <div className={clsJoin(styles.wrapper, startIntro && styles.wrapperIntro)} onWheel={handleScroll}>
            <div className={styles.title}>hello</div>
            <img src="/ape.png" className={styles.img} />
        </div>
    );
}
