export let initialState = {
    theme: 1,
    menuOpen: false,
    loading: true,
    loadingReq: false,
    projetos: [],
    sendEmail: {
        name: '',
        email: '',
        message: '',
    },
    messages: {
        success: {},
        error: {},
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
        case 'SET_LOADING_REQ':
            return {
                ...state,
                loadingReq: action.payload,
            };
        case 'SET_MENU_OPEN_OR_CLOSE':
            return { ...state, menuOpen: action.payload };

        case 'SET_VALUES_SEND_EMAIL':
            return { ...state, sendEmail: action.payload };
        case 'SET_MESSAGE_ERROR':
            return {
                ...state,
                messages: {
                    ...state.messages,
                    error: { ...state.messages.error, ...action.payload },
                },
            };
        case 'SET_MESSAGE_SUCCESS':
            return {
                ...state,
                messages: {
                    ...state.messages,
                    success: { ...state.messages.success, ...action.payload },
                },
            };
        case 'RESET_MESSAGES': {
            return {
                ...state,
                messages: action.payload,
            };
        }
        default:
            return { ...state };
    }
};

export default reducer;
