export const autoLogin = (data) => {
    return (dispatch) => {
        dispatch({ type: 'SIGN_IN', payload: data})
    }
}