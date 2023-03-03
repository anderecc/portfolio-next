export let getProjetos = (value) => {
    return { type: 'GET_PROJETOS', payload: value };
};

export let setLoading = (value) => {
    return { type: 'SET_LOADING', payload: value };
};
export let setLoadingReq = (value) => {
    return { type: 'SET_LOADING_REQ', payload: value };
};

export let setMenuOpenOrClose = (value) => {
    return { type: 'SET_MENU_OPEN_OR_CLOSE', payload: value };
};

export let setEmail = (values) => {
    return { type: 'SET_VALUES_SEND_EMAIL', payload: values };
};

export let setMessage = (type, value) => {
    return { type: type, payload: value };
};

export let resetMessages = (values) => {
    return { type: 'RESET_MESSAGES', payload: values };
};
