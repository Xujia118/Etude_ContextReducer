import { createContext, useReducer } from "react";

import reducer, { initialState } from "./reducer";

// import { updateUsername } from "./utils";
import ChildB from "./ChildB";

export const userContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function updateUsername(username) {
    dispatch({ type: 'setName', username })
  }

  return (
    <div>
      <h2>{`Hello ${state.username} from A`}</h2>
      <userContext.Provider
        value={{
          // updateUsername: updateUsername(dispatch),
          updateUsername,
          username: state.username,
        }}
      >
        <ChildB />
      </userContext.Provider>
    </div>
  );
}

export default App;
