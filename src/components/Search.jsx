import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router";
import { useQuery } from "../hooks/UseQuery";
import { useEffect, useState } from "react";

export function Search() {
  const [serchText, setSearchText] = useState("");
  const history = useHistory();
  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setSearchText(search || "");
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/?search=" + serchText);
  };
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={serchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className={styles.searchButton} type="submit">
          <FaSearch size={18} />
        </button>
      </div>
    </form>
  );
}
