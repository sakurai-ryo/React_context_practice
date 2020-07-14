import React, {
  createContext,
  useReducer
} from "react";

const initialState = {
  popular: [],
  related: [],
  selected: {},
  searched: [],
  term: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_POPULAR":
      return {
        popular: action.payload.popular,
      };

      case "SET_RELATED":
        return {
          ...state,
          related: action.payload.related,
        };

    case "SET_SELECTED":
      return {
        ...state,
        selected: action.payload.selected
      }

    case "SET_TERM":
      return {
        ...state,
        term: action.payload.term
      }

    case "SET_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched
      }

    default:
      return state;
  }
};

export const Store = createContext({
  globalState: initialState,
  setGlobalState: () => null,
});

export const StoreProvider = ({ children }) => {
  const [globalState, setGlobalState] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{globalState,setGlobalState}}>{children}</Store.Provider>
  );
};