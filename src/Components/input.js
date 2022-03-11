import { useState } from "react";
import { UseNote } from "../note-context";

const Input = () => {
  const { state, dispatch } = UseNote();
  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [pinned, setPinned] = useState(false);
  return (
    <>
      <form>
        <input
          placeholder="Enter Tittle"
          value={tittle}
          style={{ backgroundColor: color }}
          onChange={(e) => setTittle(e.target.value)}
          type="text"
          id="tittle"
        />
        <br />
        <input
          placeholder="Enter Description"
          value={description}
          style={{ backgroundColor: color }}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          id="description"
        />
        <div className="button-box">
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch({
                type: "ADD",
                payload: { tittle, description, color, pinned }
              });
              setPinned(false);
              setTittle("");
              setDescription("");
              setColor("");
            }}
          >
            Add
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setColor("#f09f9f");
            }}
          >
            Red
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setColor("#95d576");
            }}
          >
            Green
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setColor("#85b8ed");
            }}
          >
            Blue
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setPinned(pinned ? false : true);
            }}
          >
            {pinned ? "unpin" : "pin"}
          </button>
        </div>
      </form>
    </>
  );
};
export { Input };
