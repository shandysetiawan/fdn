import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import boardAction from "../store/actions/boardAction";

const EditorChoices = () => {
  //   const dispatch = useDispatch();
  const dataEditors = useSelector((state) => state.boardReducer.dataEditors);
  const error = useSelector((state) => state.boardReducer.error);
  const loading = useSelector((state) => state.boardReducer.loading);

  //   useEffect(() => {
  //     dispatch(boardAction());
  //   }, [dispatch]);
  if (error) return <h1 style={{ textAlign: "center" }}>Error</h1>;
  if (loading) return <h1 style={{ textAlign: "center" }}>Loading</h1>;

  return (
    <>
      <div>Editor's Choice</div>
      <div>Curated with love</div>
      <section className="containerEditor">
        <div className="deckEditor"></div>
        {dataEditors &&
          dataEditors.map((editor) => {
            return (
              <>
                <div className="editorCard">{editor.editor}</div>
              </>
            );
          })}
      </section>
    </>
  );
};

export default EditorChoices;
