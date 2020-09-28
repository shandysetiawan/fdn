import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import boardAction from "../store/actions/boardAction";
import styles from "../styles/latestArticles.module.css";

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
    <div className={styles.bodyArticle}>
      <div className={styles.headTitle}>
        <div>
          <h2>Latest Articles </h2>
          <p>So you can make better purchase decision</p>
        </div>
        <div>
          <p>See More {">"} </p>
        </div>
      </div>
      <section className="containerArticles">
        <div className={styles.deckArticle}>
          {dataArticles &&
            dataArticles.map((article) => {
              return (
                <>
                  <div className={styles.cardArticle}>
                    <div className={styles.cardContent}>
                      <div>
                        <img
                          src={article.image}
                          alt=""
                          className={styles.imgArticles}
                        ></img>
                      </div>
                      <h2>{article.title}</h2>
                    </div>
                    <div>
                      <p>
                        {article.author} | {article.published_at}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default LatestArticles;
