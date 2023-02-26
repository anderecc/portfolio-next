import { createContext, useReducer, useEffect } from 'react';
import { getProjetos, setLoading, setMenuOpenOrClose } from '../store/actions';
import reducer, { initialState } from '../store/reducers';
import { projetos } from '../data';

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

    return (
        <AppContext.Provider
            value={{ state, handleMenuOpenOrClose, handleLoading }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
