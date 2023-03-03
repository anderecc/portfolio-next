import { useContext } from 'react';
import Header from '../../../components/header/Header';
import Card from '../../../components/Card';
import { AppContext } from '../../../context';
import styles from '../../../styles/Projetos-html-css-sass.module.sass';
import Layout from '../../../components/Layout';

let ProjetosHtmlCssSass = () => {
    let { state } = useContext(AppContext);

    let urlBase = 'https://anderecc.github.io/projetos-html-css-sass/';

    let renderProjects = () => {
        return state.projetos.html ? (
            state.projetos.html.map((projeto) => {
                return projeto.id === 10 || projeto.id === 11 ? (
                    <Card
                        key={projeto.id}
                        title={projeto.name}
                        link={`${urlBase}${projeto.name}/public/index.html`}
                        image={projeto.image}
                    ></Card>
                ) : (
                    <Card
                        key={projeto.id}
                        title={projeto.name}
                        link={`${urlBase}${projeto.name}`}
                        image={projeto.image}
                    ></Card>
                );
            })
        ) : (
            <></>
        );
    };

    return (
        <Layout page={'projetos'} title={'Projetos com Html, Css e Sass'}>
            <h3 className="project-title">Projetos com Html, Css e Sass</h3>
            <div className={`${styles.container}`}>{renderProjects()}</div>
        </Layout>
    );
};

export default ProjetosHtmlCssSass;
