import Link from 'next/link';
import styles from '../styles/Card.module.sass';

export default function Card(props) {
    return (
        <aside className={`${styles.container} ${props.projeto}`}>
            <div
                className={styles.content}
                style={{ backgroundImage: `url(${props.image})` }}
            >
                <h1 className={styles.titulo}>{props.title}</h1>
                <figure>
                    <figcaption>
                        <a
                            href={`${props.link}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className={styles.button}>Acessar</span>
                        </a>
                    </figcaption>
                </figure>
            </div>
        </aside>
    );
}
