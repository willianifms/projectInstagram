import styles from "./PostsList.module.css";

import { Post } from "./Post";
import { useEffect, useState } from "react";

export const PostsList = () => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [log, setLog] = useState(null);

  const loading = false;

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const apiUrl = "https://rickandmortyapi.com/api/character";
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Erro ao buscar dados da API");
        }
        const posts = await response.json();
        setCharacters(posts.results); // A API retorna os personagens no campo "results"
      } catch (err) {
        setError(err.message);
      } finally {
        setLog(false);
      }
    };

    fetchCharacters();
  }, []);

  // o useEffect ele é executando apenas após a renderização

  if (log) return <p>Loading...</p>;
  if (error) return <p>{`Erro: ${error}`}</p>;

  return (
    <section className={styles.posts}>
      <h1 className={styles.title}>Posts</h1>

      <ol className={styles.list}>
        {characters.map((post) => (
          <li className={styles.listItem} key={post.id}>
            <Post user={post.name} image={post.image} description={post.name} />
          </li>
        ))}
      </ol>
    </section>
  );
};
