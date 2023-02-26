export let initialState = {
    theme: 1,
    menuOpen: false,
    loading: true,
    projetos: [],
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

        default:
            return { ...state };
    }
};

export default reducer;
