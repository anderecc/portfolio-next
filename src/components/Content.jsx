import styles from '../styles/Content.module.sass';

export default function Content(props) {
    return <main className={styles.content}>{props.children}</main>;
}
