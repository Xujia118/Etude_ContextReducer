import { createContext, useReducer } from "react";

import reducer, { initialState } from "./reducer";

import ChildB from "./ChildB";
import { updateUsername } from "./utils";

export const userContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>{`Hello ${state.username} from A`}</h2>
      <userContext.Provider
        value={{
          updateUsername: updateUsername(dispatch),
          username: state.username,
        }}
      >
        <ChildB />
      </userContext.Provider>
    </div>
  );
}

export default App;
