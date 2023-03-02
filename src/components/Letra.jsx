import styles from '../styles/Letra.module.sass';

export default function Letra(props) {
    return (
        <span
            className={`${styles.letra} ${
                props.menu ? styles.LetrasMenu : ''
            } ${props.loading ? styles.LetrasLoading : styles.LetrasMenu}`}
            style={props.style}
        >
            {props.letra}
        </span>
    );
}
