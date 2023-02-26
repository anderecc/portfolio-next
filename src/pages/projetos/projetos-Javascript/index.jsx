import { useContext } from 'react';
import Header from '../../../components/header/Header';
import Card from '../../../components/Card';
import { AppContext } from '../../../context';
import styles from '../../../styles/Projetos-Javascript.module.sass';

let ProjetosJavascript = () => {
    let { state } = useContext(AppContext);

    let urlBase = 'https://anderecc.github.io/projetos-javascript/';

    let renderProjects = () => {
        return state.projetos.javascript ? (
            state.projetos.javascript.map((projeto) => {
                return projeto.id === 34 ? (
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
        <div className="layout">
            <Header projetos></Header>
            <h3 className="project-title">
                Projetos com Javascript básicos e intermediários
            </h3>
            <div className={`${styles.container}`}>{renderProjects()}</div>
        </div>
    );
};

export default ProjetosJavascript;
