import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import boardAction from "../store/actions/boardAction";

const LatestReviews = () => {
  const dispatch = useDispatch();
  const dataReviews = useSelector((state) => state.boardReducer.dataReviews);

  useEffect(() => {
    dispatch(boardAction());
  }, [dispatch]);

  return <>{JSON.stringify(dataReviews)}</>;
};

export default LatestReviews;
