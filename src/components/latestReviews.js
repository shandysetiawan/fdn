import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/latestReviews.module.css";
import MrBanner from "./mrBanner";

const LatestReviews = () => {
  const dataReviews = useSelector((state) => state.boardReducer.dataReviews);
  const error = useSelector((state) => state.boardReducer.error);
  const loading = useSelector((state) => state.boardReducer.loading);

  if (error) return <h1 style={{ textAlign: "center" }}>Error</h1>;
  if (loading) return <h1 style={{ textAlign: "center" }}>Loading</h1>;

  return (
    <div className={styles.bodyReview}>
      <div className={styles.reviewContent}>
        <div className={styles.leftContent}>
          <div className={styles.headTitle}>
            <div>
              <p>Latest Reviews </p>
              <p>So you can make better purchase decision</p>
            </div>
            <div>
              <p>See More {">"} </p>
            </div>
          </div>
          <section className="containerReviews">
            <div className={styles.deckReview}>
              {dataReviews &&
                dataReviews.map((review) => {
                  return (
                    <>
                      <div className={styles.cardReview}>
                        <div className={styles.cardContent}>
                          <div className={styles.topContent}>
                            <img src={review.product.image}></img>
                            <div className={styles.rightCard}>
                              <p>{review.product.name}</p>
                              <p>{review.product.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </section>
        </div>

        <MrBanner></MrBanner>
      </div>
    </div>
  );
};

export default LatestReviews;
