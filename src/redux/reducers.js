const initialState = {
    // Kezdeti állapot - változók
    file: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        // Ide jönnek a különböző akciók és az állapot frissítése
        case "SET_FILE":
            return {
                ...state,
                file: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;
