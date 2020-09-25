import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import boardAction from "../store/actions/boardAction";

const LatestArticles = () => {
  const dispatch = useDispatch();
  const dataArticles = useSelector((state) => state.boardReducer.dataArticles);

  useEffect(() => {
    dispatch(boardAction());
  }, [dispatch]);

  return <>{JSON.stringify(dataArticles)}</>;
};

export default LatestArticles;
