import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import boardAction from "../store/actions/boardAction";

const LatestReviews = () => {
  //   const dispatch = useDispatch();
  const dataReviews = useSelector((state) => state.boardReducer.dataReviews);
  const error = useSelector((state) => state.boardReducer.error);
  const loading = useSelector((state) => state.boardReducer.loading);

  //   useEffect(() => {
  //     dispatch(boardAction());
  //   }, [dispatch]);

  if (error) return <h1 style={{ textAlign: "center" }}>Error</h1>;
  if (loading) return <h1 style={{ textAlign: "center" }}>Loading</h1>;

  return (
    <>
      <div>Latest Reviews</div>
      <div>So you can make better purchase decision</div>
      <section className="containerReviews">
        <div className="deckReviews"></div>
        {dataReviews &&
          dataReviews.map((review) => {
            return (
              <>
                <div className="cardReviews">{review.user}</div>
              </>
            );
          })}
      </section>
    </>
  );
};

export default LatestReviews;
