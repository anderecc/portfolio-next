import { createContext, useReducer, useEffect } from 'react';
import {
    getProjetos,
    setEmail,
    setLoading,
    setLoadingReq,
    setMenuOpenOrClose,
    setMessage,
} from '../store/actions';
import reducer, { initialState } from '../store/reducers';
import { projetos } from '../data';
import jsPDF from 'jspdf';
import { validate } from 'email-validator';
import downloadCr from '../functions/downloadCr';
import sendEmail from '../functions/sendEmail';

export let AppContext = createContext();

let AppProvider = ({ children }) => {
    let [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch(getProjetos(projetos));
        setTimeout(() => {
            dispatch(setLoading(false));
        }, 1500);
    }, []);
    //menu
    let handleMenuOpenOrClose = (value) => {
        return dispatch(setMenuOpenOrClose(value));
    };

    // setLoading
    let handleLoading = () => {
        dispatch(setLoading(true));
        dispatch(setMenuOpenOrClose(false));
        return setTimeout(() => {
            dispatch(setLoading(false));
        }, 1500);
    };

    // send Email
    let handleSendEmail = (e, values) => {
        e.preventDefault();
        let { name, email, message } = values;
        if ((name, email, message)) {
            sendEmail(values, dispatch, setMessage, setLoadingReq, setEmail);
        } else {
            console.log('naop tem todos os valores');
        }
    };

    // get values to send email
    let handleSetValuesSendEmail = (e, values) => {
        return dispatch(setEmail(e, values));
    };

    // download curriculum
    let handleDownloadCr = () => {
        return downloadCr();
    };

    let handleSetMessage = (type, value) => {
        return dispatch(setMessage(type, value));
    };

    return (
        <AppContext.Provider
            value={{
                state,
                handleMenuOpenOrClose,
                handleLoading,
                handleSetValuesSendEmail,
                handleSendEmail,
                handleDownloadCr,
                handleSetMessage,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
