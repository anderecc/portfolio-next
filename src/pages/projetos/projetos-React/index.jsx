import { useContext } from 'react';
import Header from '../../../components/header/Header';
import Card from '../../../components/Card';
import { AppContext } from '../../../context';
import styles from '../../../styles/Projetos-react.module.sass';
import Layout from '../../../components/Layout';

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
        <Layout page={'projetos'} title={'Projetos com React'}>
            <h3 className="project-title">
                Projetos com React básico e intermediário
            </h3>
            <div className={`${styles.container}`}>{renderProjects()}</div>
        </Layout>
    );
};

export default ProjetosReact;
