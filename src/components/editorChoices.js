import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/editorChoices.module.css";

const EditorChoices = () => {
  const dataEditors = useSelector((state) => state.boardReducer.dataEditors);
  const error = useSelector((state) => state.boardReducer.error);
  const loading = useSelector((state) => state.boardReducer.loading);

  if (error) return <h1 style={{ textAlign: "center" }}>Error</h1>;
  if (loading) return <h1 style={{ textAlign: "center" }}>Loading</h1>;

  return (
    <div className={styles.bodyEditor}>
      <p>Editor's Choice</p>
      <p>Curated with love</p>
      <section className="containerEditor">
        <div className={styles.deckEditor}>
          {dataEditors &&
            dataEditors.map((editor) => {
              return (
                <>
                  <div className={styles.cardEditor}>
                    <div className={styles.contentCard}>
                      <div className={styles.imageContainer}>
                        <img src={editor.product.image}></img>
                      </div>
                      <div className={styles.rating}>
                        {editor.product.rating}
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
                </>
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default EditorChoices;
