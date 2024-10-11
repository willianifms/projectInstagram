import { useRef } from "react";
import styles from "./CommentsForm.module.css";

export const CommentsForm = ({ addComment }) => {
  const comentarioRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentContent = comentarioRef.current.value;

    if (commentContent.trim() !== "") {
      const newComment = {
        author: "Anônimo", // Você pode substituir pelo nome do usuário se houver
        content: commentContent,
      };

      addComment(newComment);
      comentarioRef.current.value = ""; // Limpa o textarea após enviar
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.formTextarea}
        required
        ref={comentarioRef}
        placeholder="Digite seu comentário"
      />
      <button className={styles.formButton} type="submit">
        Enviar
      </button>
    </form>
  );
};
