import styles from "./CommentsList.module.css";

export const CommentsList = ({ comments = [] }) => {
  return (
    <ol className={styles.comments}>
      {comments.map((comment, index) => (
        <li className={styles.item} key={index}>
          <span className={styles.author}>{comment.author}</span>
          <span className={styles.content}>{comment.content}</span>
        </li>
      ))}
    </ol>
  );
};
