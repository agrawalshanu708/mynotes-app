import "./styles.css";
import { Input } from "./Components/input";
import { DisplayNotes } from "./Components/displayNotes";
export default function App() {
  return (
    <div className="App">
      <h2>My-Notes</h2>
      <Input />
      <DisplayNotes />
    </div>
  );
}
