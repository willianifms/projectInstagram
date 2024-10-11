import { useState, useRef } from "react";
import styles from "./Comment.module.css";

import { CommentsForm } from "./CommentsForm";
import { CommentsList } from "./CommentsList";

export const Comment = () => {
  const [comments, setComments] = useState([]);
  const comentario = useRef(null);

  const addComment = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  return (
    <div className={styles.comment}>
      <CommentsForm addComment={addComment} comentario={comentario} />
      <CommentsList comments={comments} />
    </div>
  );
};
