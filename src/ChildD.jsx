import { useContext } from "react";
import { userContext } from "./App";

function ChildD() {
  const {username, updateUsername} = useContext(userContext);
  
  function handleClick() {
    updateUsername('Jia')
  }

  return (
    <>
      <h2>{`Hello ${username} from D`}</h2>
      ChildD
      <button className="" type="button" onClick={handleClick}>
        Test
      </button>
    </>
  );
}

export default ChildD;