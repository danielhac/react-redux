export default function wineReducer(state = [], action) {
    switch(action.type) {
        case 'CREATE_WINE':
            return [...state,
                Object.assign({}, action.wine)
            ];

        default:
            return state;
    }
}