export let getProjetos = (value) => {
    return { type: 'GET_PROJETOS', payload: value };
};

export let setLoading = (value) => {
    return { type: 'SET_LOADING', payload: value };
};

export let setMenuOpenOrClose = (value) => {
    return { type: 'SET_MENU_OPEN_OR_CLOSE', payload: value };
};

export let setEmail = (e, values) => {
    e.preventDefault();
    return { type: 'SET_VALUES_SEND_EMAIL', payload: values };
};
