const INITIAL_STATE = {
    isSignedIn: false,
    userId: null,
    user: null,
}

export default function sessionReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SIGN_IN':
            return {...state, isSignedIn: true, userId: action.payload.id, user: action.payload.username}

        case 'SIGN_OUT':
            return state = INITIAL_STATE
        default:
            return state
    }
}