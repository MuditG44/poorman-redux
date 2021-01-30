import { createContext, useReducer, useEffect, useContext } from "react";

const AppContext = createContext(null);

export const useStore = () => useContext(AppContext);

export const combineReducers = (reducers) => (state, action) => {
  const globalState = Object.keys(reducers).reduce((acc = {}, item) => {
    return {
      ...acc,
      [item]: reducers[item](acc[item], action)
    }
  }, state);
  console.log(globalState);
  return globalState;
}

export const AppProvider = ({ children, reducer }) => {
  const [state, dispatch] = useReducer(reducer);

  useEffect(() => {
    dispatch({ type: "__INNIT__" });
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {state ? children : null}
    </AppContext.Provider>
  )
}