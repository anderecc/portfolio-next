import Letra from './Letra';
import styles from '../styles/Loading.module.sass';

export default function Loading(props) {
    const letras = props.letras.split('');
    function renderizarLetras() {
        return letras.map((letra, ind) => (
            <Letra
                loading
                key={ind}
                letra={letra}
                style={{ animationDelay: `.0${ind}s` }}
            ></Letra>
        ));
    }
    return <div className={styles.loading}>{renderizarLetras()}</div>;
}
