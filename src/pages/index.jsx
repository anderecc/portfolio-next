import { AppContext } from '../context';
import { useEffect, useState, useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Content from '../components/Content';
import Header from '../components/header/Header';
import {
    IconA,
    IconCSS,
    IconExpress,
    IconFirebase,
    IconHTML,
    IconJS,
    IconMongo,
    IconMySql,
    IconNext,
    IconNODE,
    IconREACT,
    IconRedux,
    IconSASS,
    IconTS,
} from '../components/icons';
import Loading from '../components/Loading';
import styles from '../styles/Home.module.sass';

export default function Home() {
    const { state, handleLoading } = useContext(AppContext);

    return (
        <div className="layout">
            <Head>
                <title>Anderson - Portfólio</title>

                <link rel="icon" href="./images/anderson.svg" />
            </Head>
            <Header inicio></Header>
            {state.loading ? (
                <Loading letras="Início" />
            ) : (
                <Content>
                    <h1 className={styles.h1}>
                        Olá, seja bem vindo {`<a>`}! Me chamo Anderson e esse é
                        meu portfólio!
                    </h1>
                    <section className={styles.container}>
                        <p className={styles.introducao}>
                            Uma breve introdução sobre minha pessoa e meu
                            portfólio, tenho 21 anos, sou muito focado e vou
                            construir meu futuro com programação, atualmente
                            estou estudando programação FrontEnd, mas tenho
                            conhecimentos em BackEnd, na construção de {`API's`}
                            , com banco de dados e pretendo me tornar um
                            programador FullStack. Construí esse projeto com
                            Next.js e Sass, decidi criar uma página para cada
                            tópico para treinar e mostrar um pouco mais do meu
                            conhecimento nesse framework e com as demais
                            linguagens usadas (JavaScript, React, Sass).
                        </p>
                        <div>
                            <p className={styles.title}>
                                As {'linguagens'} que tenho conhecimentos são:
                            </p>
                            <ul className={styles.skills}>
                                <li>
                                    <span>{IconHTML}</span>
                                    <span>HTML (Avançado)</span>
                                </li>
                                <li>
                                    <span>{IconCSS}</span>
                                    <span>Css (Avançado)</span>
                                </li>
                                <li>
                                    <span>{IconSASS}</span>
                                    <span>Sass (Avançado)</span>
                                </li>
                                <li>
                                    <span>{IconJS}</span>
                                    <span>JavaScript (Avançado)</span>
                                </li>
                                <li>
                                    <span>{IconTS}</span>
                                    <span>TypeScript (Básico)</span>
                                </li>
                                <li>
                                    <span>{IconREACT}</span>
                                    <span>React.js (Intermediário)</span>
                                </li>
                                <li>
                                    <span>{IconNext}</span>
                                    <span>Next.js (Intermediário)</span>
                                </li>
                                <li>
                                    <span>{IconExpress}</span>
                                    <span>Express (Básico)</span>
                                </li>
                                <li>
                                    <span>{IconNODE}</span>
                                    <span>Node.js (Básico)</span>
                                </li>
                                <li>
                                    <span>{IconMySql}</span>
                                    <span>MySQL (Básico)</span>
                                </li>
                                <li>
                                    <span>{IconMongo}</span>
                                    <span>MongoDB (Intermediário)</span>
                                </li>
                                <li>
                                    <span>{IconRedux}</span>
                                    <span>Redux (Básico)</span>
                                </li>
                                <li>
                                    <span>{IconFirebase}</span>
                                    <span>Firebase (Básico)</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className={styles.title}>
                                Conhecimentos gerais:
                            </p>
                            <ul>
                                <li>
                                    Conhecimento intermediário na construção de
                                    API
                                </li>
                                <li>
                                    Conhecimento avançado em consumir dados de
                                    API
                                </li>
                                <li>Conhecimento avançado em HTML semântico</li>
                                <li>Conhecimento avançado em lógica</li>
                                <li>Conhecimento básico em deploy</li>
                            </ul>
                            <p className={styles.text}>
                                Ainda não tenho experiencia em trabalhos reais,
                                mas tenho muita vontade em adquirir a
                                experiencia necessaria para me tornar um grande
                                profissional na programação.
                            </p>
                        </div>
                        <div>
                            <p className={styles.title}>Cursos concluídos</p>
                            <ul>
                                <li>
                                    Curso Web Design Completo: HTML5, CSS3 e JS
                                    + 5 Projetos, por Daniel Tapias Morales.
                                    (54,5 horas no total)
                                    <p className={styles.text}>
                                        Esse foi meu primeiro curso referente a
                                        programação, onde tudo começou.
                                    </p>
                                    <a
                                        target={'_blank'}
                                        href="https://www.udemy.com/certificate/UC-a442931f-f2e9-4102-98c9-7edff9b5db8f/"
                                        rel="noreferrer"
                                    >
                                        Certificado
                                    </a>
                                </li>
                                <li>
                                    SASS e SCSS do básico ao avançado +
                                    Projetos, por Matheus Battisti. (12,5 horas
                                    no total)
                                    <p className={styles.text}>
                                        Esse curso me deu muito conhecimento
                                        sobre Sass/Scss e CSS, por conta dele
                                        tenho um ótimo dominío em estilizações.
                                    </p>
                                    <a
                                        target={'_blank'}
                                        href="https://www.udemy.com/certificate/UC-04a99e14-f7a5-4424-8e71-1116af7e36d1/"
                                        rel="noreferrer"
                                    >
                                        Certificado
                                    </a>
                                </li>
                                <li>
                                    Algoritmo e Lógica de Programação do
                                    Absoluto ZERO! Completo, por Leonardo Moura
                                    Leitao. (18 horas no total)
                                    <p className={styles.text}>
                                        Fiz esse curso depois de ter uma noção
                                        de programação e JavaScript, foi muito
                                        bom para aprimorar minhas lógicas,
                                        organização e forma de pensar na
                                        resolução de problemas.
                                    </p>
                                    <a
                                        target={'_blank'}
                                        href="https://www.udemy.com/certificate/UC-b2f3524f-1d3e-4c0e-b81e-3983f30aea3f/"
                                        rel="noreferrer"
                                    >
                                        Certificado
                                    </a>
                                </li>
                                <li>
                                    Next.js e React - Curso Completo - Aprenda
                                    com Projetos, por Leonardo Moura Leitao.
                                    (28,5 horas no total)
                                    <p className={styles.text}>
                                        Aprendi muito sobre React nesse curso, e
                                        sobre NextJs tive muito conhecimento
                                        pois foi a primeira vez que tive contato
                                        com esse Framework. Gostei tanto desse
                                        curso que em seguida já comecei a fazer
                                        um completo sobre React do mesmo
                                        professor que tem uma didática incrível.
                                    </p>
                                    <a
                                        target={'_blank'}
                                        href="https://www.udemy.com/certificate/UC-c6c563d8-d3af-469b-9191-24bba705e675/"
                                        rel="noreferrer"
                                    >
                                        Certificado
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className={styles.title}>
                                Cursos que estou fazendo
                            </p>
                            <ul>
                                <li>
                                    JavaScript Funcional e Reativo - PENSE como
                                    um Dev JS, por Leonardo Moura Leitao. (17
                                    horas no total)
                                    <p className={styles.text}>
                                        Curso muito bom e estou aprendendo muito
                                        sobre JavaScript, sobre programação
                                        Funcional, organização e lógica também.
                                    </p>
                                </li>
                                <li>
                                    Curso React + Redux: Fundamentos e 2 Apps do
                                    Absoluto ZERO!, por Leonardo Moura Leitao.
                                    (54,3 horas no total)
                                    <p className={styles.text}>
                                        Esse é o curso que estou me dedicando no
                                        momento, estou muito empolgado com o que
                                        aprendi e o que irei aprender, estou
                                        pegando muita noção e conhecimento sobre
                                        React e também Next, acho linda a forma
                                        que se trabalha com React, e como as
                                        coisas vão tomando forma, estou muito
                                        satisfeito com o que venho aprendendo.
                                    </p>
                                </li>
                                <li>
                                    Curso de JavaScript e TypeScript do básico
                                    ao avançado 2022, por Luiz Ótavio Miranda.
                                    (145,5 horas no total)
                                    <p className={styles.text}>
                                        Esse foi o segundo curso que comecei, é
                                        muito completo e tem muito aprendizado a
                                        agregar, mas eu decidi fazer uma pausa
                                        nele para me aprofundar melhor em
                                        JavaScript e React, esse curso me
                                        ensinou muito sobre FrontEnd e BeckEnd,
                                        nele já aprendi muito sobre Javascript,
                                        React, Construção de API, Express,
                                        MongoDB, MySQL e ainda o curso tem muito
                                        a me ensinar, mas primeiro decidi
                                        aprimorar meus conhecimentos no que já
                                        aprendi, para não perder o foco...
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className={styles.title}>
                                Próximos cursos que irei fazer
                            </p>
                            <ul>
                                <li>
                                    Formação Node.js, por Guia do Programador,
                                    Victor Lima.
                                </li>
                                <li>
                                    LGPD: Política de Privacidade e Proteção de
                                    Dados Pessoais, por Cláudio Dodt.
                                </li>
                            </ul>
                        </div>
                    </section>
                </Content>
            )}
        </div>
    );
}
