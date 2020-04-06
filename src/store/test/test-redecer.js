
export const testReducer = (state = 0, action) => {
    if (action.type === 'ADD') {
        return state + 1;
    }
    return state;
}