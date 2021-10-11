import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>MOVIES</h1>
        </Link>
      </header>
      <div className={styles.container}>
        <Switch>
          <main>
            <Route exact path="/movies/:movieId">
              <MovieDetails />
            </Route>
            <Route exact path="/">
              <LandingPage />
            </Route>
          </main>
        </Switch>
      </div>
    </Router>
  );
}
