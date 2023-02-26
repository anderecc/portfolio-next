import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import Card from '../../components/Card';
import Content from '../../components/Content';
import Header from '../../components/header/Header';
import Loading from '../../components/Loading';
import { AppContext } from '../../context';
import styles from '../../styles/Projetos.module.sass';

export default function Projetos(props) {
    let { state, handleLoading } = useContext(AppContext);

    return (
        <div className="layout">
            <Header projetos></Header>
            {state.loading ? (
                <Loading letras="Projetos" />
            ) : (
                <Content>
                    <p className={styles.text}>Acesse: </p>
                    <Link href={'/projetos/projetos-Javascript'}>
                        <a className={styles.link}>Projetos com Javascript</a>
                    </Link>
                    <Link href={'/projetos/projetos-React'}>
                        <a className={styles.link}>Projetos com React</a>
                    </Link>
                    <Link href={'/projetos/projetos-Html-Css-Sass'}>
                        <a className={styles.link}>
                            Projetos com Html, Css e Sass
                        </a>
                    </Link>
                    <div className={styles.container}>
                        <h3 className={styles.title}>
                            Esses são alguns de meus projetos
                        </h3>
                        <div className={styles.content}>
                            <Card
                                title="Space"
                                link="https://anderecc.github.io/ProjectSpace/index.html"
                                projeto="space"
                            ></Card>
                            <Card
                                title="Sneaker e-commerce"
                                link="https://anderecc.github.io/sneakerE-commerce/"
                                projeto="sneaker"
                            ></Card>
                            <Card
                                title="Potions e-commerce"
                                link="https://anderecc.github.io/potionE-commerce/"
                                projeto="potions"
                            ></Card>
                            <Card
                                title="Electrum e-commerce"
                                link="https://anderecc.github.io/Electrum-E-Commerce/"
                                projeto="electrum"
                            ></Card>
                            <Card
                                title="Quiz App com React"
                                link="https://quiz-app-com-next-e-react-anderecc-anderecc.vercel.app/resultado?total=16&certas=0"
                                projeto="quizapp"
                            ></Card>
                            <Card
                                title="Calculadora com React"
                                link="https://calculadora-react-seven.vercel.app/"
                                projeto="calculadoranpm"
                            ></Card>
                        </div>
                    </div>
                </Content>
            )}
        </div>
    );
}
