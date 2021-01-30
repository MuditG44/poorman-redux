import { createContext, useState } from "react";
import App from "./context-app";

export const DemoContext = createContext(null);


const Root = () => {
  const [state, setState] = useState(100);
  return (
    <DemoContext.Provider value={{ state, setState }}>
      <App />
    </DemoContext.Provider>
  )
}

export default Root;