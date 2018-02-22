const auth = (state = {logged: false}, action) => {
    switch (action.type) {
      case 'SIGN_IN':
        return {
            ...state,
            logged: true
        }
      default:
        return state
    }
  }
  
  export default auth