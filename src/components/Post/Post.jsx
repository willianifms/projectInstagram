import { IconComment, IconLike, IconUnlike } from "../Icons";
import styles from "./Post.module.css";
import { Comment } from "./Comment/Comment";
import { useState } from "react";

export const Post = ({ name, image, description }) => {
  // const like = false;

  const [like, setLike] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <div className={styles.post}>
      <img className={styles.image} src={image} alt={name} />

      <div className={styles.actions}>
        <button
          className={styles.actionsButton}
          onClick={() => {
            setLike(!like);
          }}
          data-liked={like}
        >
          {like ? <IconUnlike /> : <IconLike />}
        </button>

        <button
          className={styles.actionsButton}
          onClick={() => {
            setModal(!modal);
          }}
        >
          <IconComment />
        </button>
      </div>

      <p className={styles.description}>{description}</p>

      <section className={styles.comments} data-display={modal}>
        <h2 className={styles.commentsTitle}>Comments</h2>
        <Comment />
      </section>
    </div>
  );
};
