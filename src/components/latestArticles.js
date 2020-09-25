import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import boardAction from "../store/actions/boardAction";

const LatestArticles = () => {
  const dispatch = useDispatch();
  const dataArticles = useSelector((state) => state.boardReducer.dataArticles);
  const error = useSelector((state) => state.boardReducer.error);
  const loading = useSelector((state) => state.boardReducer.loading);

  useEffect(() => {
    dispatch(boardAction());
  }, [dispatch]);

  if (error) return <h1 style={{ textAlign: "center" }}>Error</h1>;
  if (loading) return <h1 style={{ textAlign: "center" }}>Loading</h1>;

  return (
    <>
      <div>Latest Articles </div>
      <div>So you can make better purchase decision</div>
      <section className="containerArticles">
        <div className="deckArticles"></div>
        {dataArticles &&
          dataArticles.map((article) => {
            return (
              <>
                <div className="articleCard">{article.title}</div>
              </>
            );
          })}
      </section>
    </>
  );
};

export default LatestArticles;
