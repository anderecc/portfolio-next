export let initialState = {
    theme: 1,
    menuOpen: false,
    loading: true,
    projetos: [],
    sendEmail: {
        nome: '',
        email: '',
        message: '',
    },
};

let reducer = (state, action) => {
    switch (action.type) {
        case 'GET_PROJETOS':
            return { ...state, projetos: action.payload };
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload,
            };
        case 'SET_MENU_OPEN_OR_CLOSE':
            return { ...state, menuOpen: action.payload };

        case 'SET_VALUES_SEND_EMAIL':
            return { ...state, sendEmail: action.payload };

        default:
            return { ...state };
    }
};

export default reducer;
