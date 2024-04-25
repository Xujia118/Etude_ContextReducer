export function updateUsername(dispatch) {
    return function(username) {
        dispatch({ type: "setName", username})
    }
}

// Can also use the following arrow function
// export const updateUsername = (dispatch) => (username) => {
//   dispatch({ type: "setName", username });
// };