import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";

export function MovieCard({ movie }) {
  const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.movieCard}>
      <Link to={"/movies/" + movie.id}>
        <img
          width={200}
          height={300}
          className={styles.movieImage}
          src={imgUrl}
          alt={movie.title}
        />
        <h3 className={styles.title}>{movie.title}</h3>
      </Link>
    </li>
  );
}
