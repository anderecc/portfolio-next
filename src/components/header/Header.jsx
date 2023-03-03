import Link from 'next/link';
import { useContext } from 'react';
import { AppContext } from '../../context';
import styles from '../../styles/Header.module.sass';
import IconButton from '../IconButton';
import { IconClose, IconGitHub, IconLinkedIn, IconMenu } from '../icons';
import Letra from '../Letra';

export default function Header(props) {
    let { state, handleMenuOpenOrClose, handleLoading } =
        useContext(AppContext);

    return (
        <header className={styles.container}>
            <div className={styles.top}>
                <Link href={'/'}>
                    <div
                        style={{ display: 'flex', justifyContent: 'center' }}
                        onClick={() => handleLoading()}
                    >
                        <Letra letra="A" style={{ animationDelay: '0' }} menu />
                        <Letra
                            letra="N"
                            style={{ animationDelay: '.1s' }}
                            menu
                        />
                        <Letra
                            letra="D"
                            style={{ animationDelay: '.2s' }}
                            menu
                        />
                        <Letra
                            letra="E"
                            style={{ animationDelay: '.3s' }}
                            menu
                        />
                        <Letra
                            letra="R"
                            style={{ animationDelay: '.4s' }}
                            menu
                        />
                        <Letra
                            letra="S"
                            style={{ animationDelay: '.5s' }}
                            menu
                        />
                        <Letra
                            letra="O"
                            style={{ animationDelay: '.6s' }}
                            menu
                        />
                        <Letra
                            letra="N"
                            style={{ animationDelay: '.7s' }}
                            menu
                        />
                    </div>
                </Link>
                <div className={styles.socials}>
                    <ul>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/andersondb06/"
                                target={'_blank'}
                                rel="noreferrer"
                            >
                                {IconLinkedIn}
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/anderecc"
                                target={'_blank'}
                                rel="noreferrer"
                            >
                                {IconGitHub}
                            </a>
                        </li>
                    </ul>
                </div>
                {!state.menuOpen ? (
                    <IconButton onClick={() => handleMenuOpenOrClose(true)}>
                        {IconMenu}
                    </IconButton>
                ) : (
                    <IconButton onClick={() => handleMenuOpenOrClose(false)}>
                        {IconClose}
                    </IconButton>
                )}
            </div>
            <nav
                className={`${styles.nav} ${
                    state.menuOpen ? styles.menuOpen : styles.menuClose
                }`}
            >
                <ul>
                    <li>
                        <Link href="/">
                            <a
                                onClick={() => handleLoading()}
                                className={styles.link}
                                style={
                                    props.page === 'inicio'
                                        ? { fontWeight: 'bold', color: '#eed' }
                                        : null
                                }
                            >
                                Início
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sobre">
                            <a
                                onClick={() => handleLoading()}
                                className={styles.link}
                                style={
                                    props.page === 'sobre'
                                        ? { fontWeight: 'bold', color: '#eed' }
                                        : null
                                }
                            >
                                Sobre mim
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projetos">
                            <a
                                onClick={() => handleLoading()}
                                className={styles.link}
                                style={
                                    props.page === 'projetos'
                                        ? { fontWeight: 'bold', color: '#eed' }
                                        : null
                                }
                            >
                                Projetos
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contato">
                            <a
                                onClick={() => handleLoading()}
                                className={styles.link}
                                style={
                                    props.page === 'contato'
                                        ? { fontWeight: 'bold', color: '#eed' }
                                        : null
                                }
                            >
                                Contato
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
