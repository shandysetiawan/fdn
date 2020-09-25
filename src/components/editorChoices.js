import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import boardAction from "../store/actions/boardAction";

const EditorChoices = () => {
  const dispatch = useDispatch();
  const dataEditors = useSelector((state) => state.boardReducer.dataEditors);

  useEffect(() => {
    dispatch(boardAction());
  }, [dispatch]);

  return <>{JSON.stringify(dataEditors)}</>;
};

export default EditorChoices;
