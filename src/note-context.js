import { createContext, useContext, useReducer } from "react";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const noteReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return { ...state, notes: [action.payload, ...state.notes] };
      case "SET_COLOR":
        return {
          ...state,
          notes: state.notes.map((item, ind) =>
            ind === action.id ? { ...item, color: action.payload } : item
          )
        };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(noteReducer, {
    notes: []
  });
  return (
    <NoteContext.Provider value={{ state, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
};
const UseNote = () => {
  return useContext(NoteContext);
};

export { NoteProvider, UseNote };
