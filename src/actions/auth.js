export const login = user => {
    return {
        type: 'SIGN_IN',
        payload: user
    }
}