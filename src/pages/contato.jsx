import Link from 'next/link';
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
    let { state, handleLoading, handleSetValuesSendEmail, sendEmail } =
        useContext(AppContext);

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('/images/cr/crAnderson.pdf').then((response) => {
            response.blob().then((blob) => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'crAnderson.pdf';
                alink.click();
            });
        });
    };

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
                            <span>andersondbl06@gmail.com</span>
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
                                <button
                                    className={styles.buttonDownload}
                                    onClick={onButtonClick}
                                >
                                    {IconDownload}
                                </button>
                            </p>
                        </div>
                        <div>
                            <p className={styles.text}>Envie sua mensagem</p>
                            <form className={styles.form}>
                                <input
                                    type="name"
                                    name="name"
                                    id={styles.email}
                                    onChange={(e) =>
                                        handleSetValuesSendEmail(e, {
                                            name: e.target.value,
                                        })
                                    }
                                    placeholder="Insira seu Nome"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    id={styles.email}
                                    onChange={(e) =>
                                        handleSetValuesSendEmail(e, {
                                            ...state.sendEmail,
                                            email: e.target.value,
                                        })
                                    }
                                    placeholder="Insira seu e-mail"
                                />

                                <textarea
                                    type="text"
                                    id={styles.mensagem}
                                    onChange={(e) =>
                                        handleSetValuesSendEmail(e, {
                                            ...state.sendEmail,
                                            message: e.target.value,
                                        })
                                    }
                                    placeholder="Digite sua mensagem"
                                />
                                <button
                                    className={styles.buttonEnviar}
                                    onClick={(e) =>
                                        sendEmail(e, state.sendEmail)
                                    }
                                >
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </section>
                </Content>
            )}
        </div>
    );
}
