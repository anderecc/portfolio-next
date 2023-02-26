import { useContext, useEffect, useState } from 'react';
import Content from '../components/Content';
import Header from '../components/header/Header';
import {
    IconDownload,
    IconEmail,
    IconGitHub,
    IconLinkedIn,
    IconPhone,
} from '../components/icons';
import Loading from '../components/Loading';
import { AppContext } from '../context';
import styles from '../styles/Contato.module.sass';

export default function Contato(props) {
    let { state, handleLoading } = useContext(AppContext);

    return (
        <div className="layout">
            <Header contato></Header>
            {state.loading ? (
                <Loading letras="Contato" />
            ) : (
                <Content>
                    <h1 className={styles.h1}>Entre em contato</h1>
                    <section className={styles.container}>
                        <p className={styles.text}>
                            <span>{IconPhone}</span> Telefone:
                            <span>(54) 9 9946-6790</span>
                        </p>
                        <p className={styles.text}>
                            <span>{IconEmail}</span> E-mail:
                            andersondbl06@gmail.com
                        </p>
                        <div>
                            <p className={styles.text}>
                                <span>{IconLinkedIn}</span> LinkedIn:
                                <a
                                    href="https://www.linkedin.com/in/andersondb06/"
                                    target={'_blank'}
                                    rel="noreferrer"
                                >
                                    @andersondb06
                                </a>
                            </p>
                            <p className={styles.text}>
                                <span>{IconGitHub}</span> GitHub:
                                <a
                                    href="https://github.com/anderecc"
                                    target={'_blank'}
                                    rel="noreferrer"
                                >
                                    @anderecc
                                </a>
                            </p>
                            <p className={styles.text}>
                                Baixe também o meu curriculo
                                <span>{IconDownload}</span>
                            </p>
                        </div>
                        <div>
                            <p className={styles.text}>Envie sua mensagem</p>
                            <form action="post" className={styles.form}>
                                <input
                                    type="email"
                                    name="email"
                                    id={styles.email}
                                    placeholder="Insira seu e-mail"
                                />
                                <input
                                    type="text"
                                    id={styles.mensagem}
                                    placeholder="Digite sua mensagem"
                                />
                                <button>Enviar</button>
                            </form>
                        </div>
                    </section>
                </Content>
            )}
        </div>
    );
}
