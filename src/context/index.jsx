import { createContext, useReducer, useEffect } from 'react';
import {
    getProjetos,
    resetMessages,
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
        dispatch(
            setEmail({
                name: '',
                email: '',
                message: '',
            })
        );
        dispatch(
            resetMessages({
                success: {},
                error: {},
            })
        );
        return setTimeout(() => {
            dispatch(setLoading(false));
        }, 1500);
    };

    // send Email
    let handleSendEmail = (e, values) => {
        e.preventDefault();
        let { name, email, message } = values;

        if (
            name.length !== 0 &&
            name.trim() &&
            validate(email) &&
            email.trim() &&
            message.length !== 0 &&
            message.trim()
        ) {
            sendEmail(
                { name, email, message },
                dispatch,
                setMessage,
                setLoadingReq,
                setEmail
            );
        } else {
            dispatch(
                setMessage('SET_MESSAGE_ERROR', {
                    erro: 'Preencha todos os campos.',
                })
            );
        }
    };

    // get values to send email
    let handleSetValuesSendEmail = (values) => {
        return dispatch(setEmail(values));
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
