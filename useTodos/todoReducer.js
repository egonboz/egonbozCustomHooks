

export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case 'addTodoAction':
            return [ ...initialState, action.payload ];
        case 'deleteTodoAction':
            return initialState.filter( todo => todo.id !== action.payload );
        case 'toggleDoneTodoAction':
            return initialState.map( todo => 
                ( todo.id === action.payload )
                    ? { ...todo, done: !todo.done }
                    : todo
            );
        default:
            return initialState;
    }
}
