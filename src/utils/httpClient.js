const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWM0MzJlZTJkMDkwMGRiZTQxNGEwNmExZjU0MGU0NCIsInN1YiI6IjYxNDA4YzQ5ZDIzNmU2MDAyNjM0NjUxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bc8W0P5Gi1Jj7XmEwJXrEuvfjUQ3Etm_czSsNkxFZY0",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
