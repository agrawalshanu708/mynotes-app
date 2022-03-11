import { UseNote } from "../note-context";

const DisplayNotes = () => {
  const { state, dispatch } = UseNote();
  const pinnedNotes = state.notes.filter((item) => item.pinned);
  const unpinnedNotes = state.notes.filter((item) => item.pinned === false);
  console.log(state.notes);
  return (
    <>
      {pinnedNotes.length > 0 && <h3>Pin Notes</h3>}
      <div className="container">
        {pinnedNotes.map(({ tittle, description, color, pinned }, index) => (
          <div key={index} style={{ backgroundColor: color }} className="box">
            <h3 style={{ fontSize: "2rem" }}>{tittle}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
      {pinnedNotes.length > 0 && <h3>Unpin Notes</h3>}
      <div className="container">
        {unpinnedNotes.map(({ tittle, description, color, pinned }, index) => (
          <div style={{ backgroundColor: color }} className="box">
            <p>{tittle}</p>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export { DisplayNotes };
