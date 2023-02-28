import { createContext, useReducer, useEffect } from 'react';
import { getProjetos, setLoading, setMenuOpenOrClose } from '../store/actions';
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

    let handlePdfGenerate = () => {
        let curriculum = new jsPDF('portrait', 'px', 'a4', 'false')
            .addImage(
                '/images/cr/crAnderson1024_1.jpg',
                'JPEG',
                0,
                0,
                424,
                1024
            )
            .save('crAnderson.pdf');
    };

    return (
        <AppContext.Provider
            value={{
                state,
                handleMenuOpenOrClose,
                handleLoading,
                handlePdfGenerate,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
