
export const userKey = (state = null, action) => {
    switch(action.type) {
        case 'SET':
            return action.value;
        case 'CLEAR':
            return action.value;
        default: 
            return state;
    }
}