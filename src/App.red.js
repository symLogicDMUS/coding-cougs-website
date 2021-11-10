export function reducer(state, action) {
    switch (action.type) {
        case "update-mode":
            return {
                ...state,
                isDarkMode: !state.isDarkMode,
            };
        default:
            throw new Error();
    }
}
