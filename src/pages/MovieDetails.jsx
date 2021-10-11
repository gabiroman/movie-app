import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { get } from "../utils/httpClient";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    get("/movie/" + movieId).then((data) => {
      setIsLoading(false);
      setMovie(data);
    });
  }, [movieId]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!movie) {
    return null;
  }

  console.log(movie);
  const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <div className={styles.detailsContainer}>
      <div className={styles.col}>
        <img
          width={250}
          height={375}
          className={styles.imgMovie}
          src={imgUrl}
          alt={movie.title}
        />
      </div>

      <div className={styles.col}>
        <h2>{movie.title}</h2>
        {movie.genres.map((genre) => (
          <Link to={"/genrs/" + genre.name}>
            <p className={styles.genreMovie}>{genre.name}</p>
          </Link>
        ))}
        <p className={styles.movieDescription}>{movie.overview}</p>
      </div>
    </div>
  );
}
