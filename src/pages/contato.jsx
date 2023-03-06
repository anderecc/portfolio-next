import { validate } from 'email-validator';
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
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import { AppContext } from '../context';
import styles from '../styles/Contato.module.sass';

export default function Contato(props) {
    let {
        state,
        handleSetValuesSendEmail,
        handleSendEmail,
        handleDownloadCr,
        handleSetMessage,
    } = useContext(AppContext);

    let handleGetName = (e) => {
        if (e.target.value.length !== 0 && e.target.value.trim()) {
            handleSetValuesSendEmail({
                ...state.sendEmail,
                name: e.target.value,
            });
            handleSetMessage('SET_MESSAGE_ERROR', {
                name: '',
            });
        } else {
            handleSetMessage('SET_MESSAGE_ERROR', {
                name: 'Digite um nome válido.',
            });
            handleSetValuesSendEmail({
                ...state.sendEmail,
                name: '',
            });
        }
    };
    let handleGetEmail = (e) => {
        if (validate(e.target.value) && e.target.value.trim()) {
            handleSetValuesSendEmail({
                ...state.sendEmail,
                email: e.target.value,
            });
            handleSetMessage('SET_MESSAGE_ERROR', {
                email: '',
            });
        } else {
            handleSetMessage('SET_MESSAGE_ERROR', {
                email: 'Digite um email válido.',
            });
            handleSetValuesSendEmail({
                ...state.sendEmail,
                email: '',
            });
        }
    };
    let handleGetMessage = (e) => {
        if (e.target.value.length !== 0 && e.target.value.trim()) {
            handleSetValuesSendEmail({
                ...state.sendEmail,
                message: e.target.value,
            });
            handleSetMessage('SET_MESSAGE_ERROR', {
                message: '',
            });
        } else {
            handleSetMessage('SET_MESSAGE_ERROR', {
                message: 'Digite alguma mensagem.',
            });
            handleSetValuesSendEmail({
                ...state.sendEmail,
                message: '',
            });
        }
    };

    return (
        <Layout page={'contato'} title={'Contato'}>
            {state.loading ? (
                <Loading letras="Contato" />
            ) : state.loadingReq ? (
                <Loading
                    letras="Enviando"
                    loadingReq={state.loadingReq}
                ></Loading>
            ) : (
                <Content>
                    <h1 className={styles.h1}>Entre em contato</h1>
                    <section className={styles.container}>
                        <p className={styles.text}>
                            <span>{IconPhone}</span> Telefone:
                            <span>(54) 9 9946-6790</span>
                        </p>
                        <p className={styles.text}>
                            <span>{IconEmail}</span> Email:
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
                                    onClick={handleDownloadCr}
                                >
                                    {IconDownload}
                                </button>
                            </p>
                        </div>
                        <form className={styles.form}>
                            <p className={styles.text}>Envie sua mensagem: </p>
                            <div className={styles.inputsContent}>
                                <div className={styles.inputContainer}>
                                    <input
                                        type="name"
                                        name="name"
                                        id={styles.email}
                                        onChange={handleGetName}
                                        placeholder="Insira seu Nome"
                                    />
                                    {state.messages.error.name ? (
                                        <label className="message error">
                                            {state.messages.error.name}
                                        </label>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                                <div className={styles.inputContainer}>
                                    <input
                                        type="email"
                                        name="email"
                                        id={styles.email}
                                        onChange={handleGetEmail}
                                        placeholder="Insira seu Email"
                                    />
                                    {state.messages.error.email ? (
                                        <label className="message error">
                                            {state.messages.error.email}
                                        </label>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </div>
                            <div className={styles.textContainer}>
                                <textarea
                                    type="text"
                                    id={styles.mensagem}
                                    onChange={handleGetMessage}
                                    placeholder="Digite sua mensagem"
                                />
                                {state.messages.error.message ? (
                                    <label className="message error">
                                        {state.messages.error.message}
                                    </label>
                                ) : (
                                    <></>
                                )}
                            </div>
                            <button
                                className={styles.buttonEnviar}
                                onClick={(e) =>
                                    handleSendEmail(e, state.sendEmail)
                                }
                            >
                                Enviar
                            </button>
                        </form>
                        {state.messages.success.send ? (
                            <label className="message success">
                                {state.messages.success.send}
                            </label>
                        ) : state.messages.error.erro ? (
                            <label className="message error">
                                {state.messages.error.erro}
                            </label>
                        ) : (
                            <></>
                        )}
                    </section>
                </Content>
            )}
        </Layout>
    );
}
