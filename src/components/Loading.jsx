import Letra from './Letra';
import styles from '../styles/Loading.module.sass';
import { useContext } from 'react';

export default function Loading(props) {
    const letras = props.letras.split('');
    function renderizarLetras() {
        return letras.map((letra, ind) => (
            <Letra
                loading={props.loadingReq ? false : true}
                key={ind}
                letra={letra}
                style={{
                    animationDelay: `.0${ind}s`,
                }}
            ></Letra>
        ));
    }
    return <div className={styles.loading}>{renderizarLetras()}</div>;
}
