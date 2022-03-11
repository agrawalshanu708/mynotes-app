import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { NoteProvider } from "./note-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <NoteProvider>
      <App />
    </NoteProvider>
  </StrictMode>,
  rootElement
);
