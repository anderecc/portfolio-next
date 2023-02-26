import { useContext, useEffect, useState } from 'react';
import Content from '../components/Content';
import Header from '../components/header/Header';
import Loading from '../components/Loading';
import { AppContext } from '../context';
import styles from '../styles/Sobre.module.sass';

export default function Sobre(props) {
    let { state, handleLoading } = useContext(AppContext);

    return (
        <div className="layout">
            <Header sobre></Header>
            {state.loading ? (
                <Loading letras="Sobre" />
            ) : (
                <Content>
                    <h1 className={styles.h1}>
                        Um pouco sobre quem eu sou e minhas habilidades...
                    </h1>
                    <section className={styles.container}>
                        <div>
                            <p className={styles.text}>
                                Como mencionei anteriormente, me chamo Anderson
                                de Borba de Lima, tenho 21 anos e comecei a
                                estudar programação pois sempre fui apaixonado
                                por tecnologia, sempre tive curiosidade em saber
                                como as {`'coisas'`}
                                são feitas e funcionavam, sou uma pessoa muito
                                curiosa, então se algo me deixa com uma pulga
                                atrás da orelha, eu sinto a necessidade de
                                desvendar ou resolver aquilo. Posso dizer que
                                sou muito focado em meus objetivos e metas,
                                tenho muito compromisso tanto no profissional
                                quanto no pessoal, estou sempre buscando novos
                                conhecimentos, gosto bastante de fortalecer
                                minha mente estudando sobre desenvolvimento
                                pessoal, também sou uma pessoa muito organizada.
                                Sou muito pró ativo, não consigo ficar parado,
                                preciso sempre estar fazendo algo, sou muito
                                calmo e isso me ajuda bastante a tomar atitudes
                                e pensar melhor sobre as situações, tenho muita
                                empatia com as pessoas, gosto de ajudar quando
                                sei que posso e aprender também. Sou uma pessoa
                                muito amigável, me dou bem com qualquer pessoa,
                                sou bem compreensivo, e tenho um ótimo trabalho
                                em equipe, tenho perfil de lider e isso me ajuda
                                a me comunicar melhor com as pessoas.
                            </p>
                            <p className={styles.text}>
                                Enfim, isso foi um resumo sobre mim...
                            </p>
                        </div>
                        <div>
                            <p className={styles.title}>
                                Algumas de minhas habilidades
                                profissionais/pessoais são:
                            </p>
                            <ul className={styles.skills}>
                                <li>Trabalho em equipe</li>
                                <li>Boa comunicação</li>
                                <li>Perfil de liderança</li>
                                <li>Pró ativo</li>
                                <li>Muita facilidade em aprender</li>
                                <li>Muito responsável no geral</li>
                                <li>
                                    Muita noção de trabalho, do que, onde e
                                    quando fazer
                                </li>
                                <li>Muito educado</li>
                                <li>Muito dedicado</li>
                                <li>
                                    Facilidade em me adpatar com funçoes/pessoas
                                </li>
                                <li>Sou muito calmo</li>
                                <li>Tenho raciocínio apurado</li>
                            </ul>
                        </div>
                        <div>
                            <p className={styles.text}>
                                Tenho muita vontade de conquistar meus
                                objetivos, quero crescer muito na area de
                                programação, aprender muito e ajudar as pessoas
                                a crescerem também, quero ter muito conhecimento
                                e experiencia para realizar qualquer trabalho,
                                acredito que com minha facilidade em me adpatar
                                e aprender irei ter sucesso nesse objetivo.
                            </p>
                        </div>
                    </section>
                </Content>
            )}
        </div>
    );
}
// então estava sempre mechendo nas
//                                     configurações dos aplicativos, nas
//                                     pernsonalizações, e nos navegadores eu abria
//                                     o código fonte e tentava desvendar o que era
//                                     todos aqueles nomes e tags estranhas, até
//                                     que decidi começar a estudar e estou cada
//                                     vez mais apaixonado por essa profissão, cada
//                                     conteúdo novo aprendido, as práticas, ver o
//                                     projeto tomando forma, funcionando é muito
//                                     satisfatório.

// Bom atendimento

// Tenho disciplina

// Aprendo rápido

// Tenho noção de trabalho

// Sou bem educado

// Sou simpático

// Gosto de trabalhar

// Sou responsável

// Tento ajudar quando possível

// Sou pontual com os horários

// Não gosto de intrigas

// Sou sincero

// Tenho boa convivência com os colegas de trabalho

// Procuro aprender e absorver o que for passado

// Sou animado

// Tenho força de vontade

// Gosto de motivar a melhorar

// Me dedico ao trabalho

// Sou rápido

// Tenho postura

// [...]
