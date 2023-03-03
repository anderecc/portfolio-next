import { redirect } from 'next/dist/server/api-utils';

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
            if (res.status === 200) {
                dispatch(setLoadingReq(false));
                dispatch(
                    setMessage('SET_MESSAGE_SUCCESS', {
                        send: 'Mensagem enviada com sucesso.',
                    })
                );
                setTimeout(() => {
                    dispatch(
                        setMessage('SET_MESSAGE_SUCCESS', {
                            send: '',
                        })
                    );
                }, 10000);
                dispatch(
                    setEmail({
                        name: '',
                        email: '',
                        message: '',
                    })
                );
            } else if (res.status !== 200) {
                dispatch(setLoadingReq(false));
                dispatch(
                    setMessage('SET_MESSAGE_ERROR', {
                        erro: 'Ocorreu algum erro inesperado.',
                    })
                );
                setTimeout(() => {
                    dispatch(
                        setMessage('SET_MESSAGE_ERROR', {
                            erro: '',
                        })
                    );
                }, 5000);
                dispatch(
                    setEmail({
                        name: '',
                        email: '',
                        message: '',
                    })
                );
            }
        })
        .catch((err) => {
            dispatch(setLoadingReq(false));
            dispatch(
                setMessage('SET_MESSAGE_ERROR', {
                    erro: 'Ocorreu algum erro inesperado.',
                })
            );
            setTimeout(() => {
                dispatch(
                    setMessage('SET_MESSAGE_ERROR', {
                        erro: '',
                    })
                );
            }, 5000);
            dispatch(
                setEmail({
                    name: '',
                    email: '',
                    message: '',
                })
            );
        });
};

export default sendEmail;
