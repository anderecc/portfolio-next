import { createContext, useReducer, useEffect } from 'react';
import {
    getProjetos,
    setEmail,
    setLoading,
    setMenuOpenOrClose,
} from '../store/actions';
import reducer, { initialState } from '../store/reducers';
import { projetos } from '../data';
import jsPDF from 'jspdf';

export let AppContext = createContext();

let AppProvider = ({ children }) => {
    let [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch(getProjetos(projetos));
        setTimeout(() => {
            dispatch(setLoading(false));
        }, 1500);
    }, []);

    let handleMenuOpenOrClose = (value) => {
        return dispatch(setMenuOpenOrClose(value));
    };

    let handleLoading = () => {
        dispatch(setLoading(true));
        dispatch(setMenuOpenOrClose(false));
        return setTimeout(() => {
            dispatch(setLoading(false));
        }, 1500);
    };

    let sendEmail = (e, values) => {
        e.preventDefault();
        let { name, email, message } = values;
        console.log(name, email, message);
        fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                message,
            }),
        })
            .then((res) => {
                console.log(res);
                alert('Certo');
            })
            .catch((err) => {
                console.log(err);
                alert('Ocorreu um erro');
            });
    };

    let handleSetValuesSendEmail = (e, values) => {
        return dispatch(setEmail(e, values));
    };

    return (
        <AppContext.Provider
            value={{
                state,
                handleMenuOpenOrClose,
                handleLoading,
                handleSetValuesSendEmail,
                sendEmail,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
