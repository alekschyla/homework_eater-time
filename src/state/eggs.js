const CHANGE = 'eggs/CHANGE';

const initialState = {
    isPainted: false,
};

export const changeEggActionCreator = () => ({
    type: CHANGE,
});

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE:
            return {
                ...state,
                isPainted: !state.isPainted,
            };

        default:
            return state;
    }
}
