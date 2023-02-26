import AppProvider from '../context';
import '../styles/globals.sass';

function MyApp({ Component, pageProps }) {
    return (
        <AppProvider>
            <Component {...pageProps} />;
        </AppProvider>
    );
}

export default MyApp;
