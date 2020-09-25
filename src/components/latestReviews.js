import React from "react";
import { useSelector } from "react-redux";

const LatestReviews = () => {
  const dataReviews = useSelector((state) => state.boardReducer.dataReviews);
  const error = useSelector((state) => state.boardReducer.error);
  const loading = useSelector((state) => state.boardReducer.loading);

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
