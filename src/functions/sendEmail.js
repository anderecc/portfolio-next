let sendEmail = (values, dispatch, setMessage, setLoadingReq, setEmail) => {
    dispatch(setLoadingReq(true));
    let { name, email, message } = values;
    return fetch('/api/sendEmail', {
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
            dispatch(setLoadingReq(false));
            dispatch(
                setMessage('SET_MESSAGE_SUCCESS', {
                    send: 'Mensagem enviada com sucesso.',
                })
            );
            dispatch(
                setEmail({
                    name: '',
                    email: '',
                    message: '',
                })
            );
        })
        .catch((err) => {
            dispatch(
                setMessage(
                    'SET_MESSAGE_ERROR',
                    'Ocorreu algum erro inesperado.'
                )
            );
        });
};

export default sendEmail;
