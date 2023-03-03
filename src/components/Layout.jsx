import Head from 'next/head';
import Header from './header/Header';

let Layout = (props) => {
    return (
        <div className="layout">
            <Head>
                <title>{props.title}</title>

                <link rel="icon" href="./images/anderson.svg" />
            </Head>
            <Header page={props.page}></Header>
            {props.children}
        </div>
    );
};

export default Layout;
