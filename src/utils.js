export function updateUsername(dispatch) {
    return function(username) {
        dispatch({ type: "setName", username})
    }
}