import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/editorChoices.module.css";

const EditorChoices = () => {
  const dataEditors = useSelector((state) => state.boardReducer.dataEditors);
  const error = useSelector((state) => state.boardReducer.error);
  const loading = useSelector((state) => state.boardReducer.loading);

  const renderStarRate = (editor) => {
    const stars = [];
    for (let i = 0; i < Math.round(editor.product.rating); i++) {
      stars.push(<span className={`material-icons ${styles.star}`}>star</span>);
    }

    if (stars.length < 5) {
      stars.push(<span className="material-icons">star</span>);
    }

    return stars;
  };

  if (error) return <h1 style={{ textAlign: "center" }}>Error</h1>;
  if (loading) return <h1 style={{ textAlign: "center" }}>Loading</h1>;

  return (
    <div className={styles.bodyEditor}>
      <h2>Editor's Choice</h2>
      <p>Curated with love</p>
      <section className="containerEditor">
        <div className={styles.deckEditor}>
          {dataEditors &&
            dataEditors.map((editor) => {
              return (
                <div>
                  <div className={styles.containerThumbnail}>
                    <div className={styles.thumbnail} />
                    <div className={styles.editorData}>
                      <p className={styles.txtEditor}>{editor.editor}</p>
                      <p className={styles.txtRole}>{editor.role}</p>
                    </div>
                  </div>
                  <div className={styles.cardEditor}>
                    <div className={styles.contentCard}>
                      <div className={styles.imageContainer}>
                        <img
                          src={editor.product.image}
                          alt=""
                          className={styles.imgEditor}
                        ></img>
                      </div>
                      <div className={styles.rating}>
                        {renderStarRate(editor)}
                      </div>
                      <div className={styles.productName}>
                        {editor.product.name}
                      </div>
                      <div className={styles.productDesc}>
                        {editor.product.description}
                      </div>
                      <div className={styles.productBrand}>
                        {editor.product.name}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default EditorChoices;
