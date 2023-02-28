import { useContext } from 'react';
import Header from '../../../components/header/Header';
import Card from '../../../components/Card';
import { AppContext } from '../../../context';
import styles from '../../../styles/Projetos-react.module.sass';

let ProjetosReact = () => {
    let { state } = useContext(AppContext);

    let urlBase = 'https://projetos-react-psi.vercel.app/';

    let renderProjects = () => {
        return state.projetos.react ? (
            state.projetos.react.map((projeto) => {
                return (
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
                Projetos com React básico e intermediário
            </h3>
            <div className={`${styles.container}`}>{renderProjects()}</div>
        </div>
    );
};

export default ProjetosReact;
