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
                                title="fylo-landing-page"
                                link="https://anderecc.github.io/projetos-html-css-sass/9-fylo-landing-page/index.html"
                                image="/images/projetos-html-css-sass/9-fylo-landing-page.png"
                            />
                            <Card
                                title="electrum-ecommerce"
                                link="https://anderecc.github.io/projetos-html-css-sass/12-electrum-ecommerce/index.html"
                                image="/images/projetos-html-css-sass/12-electrum-ecommerce.png"
                            />
                            <Card
                                title="potions-shop"
                                link="https://anderecc.github.io/projetos-javascript/30-potions-shop/"
                                image="/images/projetos-javascript/30-potions-shop.png"
                            />
                            <Card
                                title="sneaker-ecommerce"
                                link="https://anderecc.github.io/projetos-javascript/34-sneaker-ecommerce/public/index.html"
                                image="/images/projetos-javascript/34-sneaker-ecommerce.png"
                            />
                            <Card
                                title="english-dictionary"
                                link="https://anderecc.github.io/projetos-javascript/14-english-dictionary/"
                                image="/images/projetos-javascript/14-english-dictionary.png"
                            />
                            <Card
                                title="calculator"
                                link="https://projetos-react-psi.vercel.app/11-calculator"
                                image="/images/projetos-react/11-calculator.png"
                            />
                            <Card
                                title="menu-restaurant"
                                link="https://projetos-react-psi.vercel.app/6-menu-restaurant"
                                image="/images/projetos-react/6-menu-restaurant.png"
                            />
                            <Card
                                title="lista-tarefa-reducer"
                                link="https://projetos-react-psi.vercel.app/9-lista-tarefa-reducer"
                                image="/images/projetos-react/9-lista-tarefa-reducer.png"
                            />
                        </div>
                    </div>
                </Content>
            )}
        </div>
    );
}
