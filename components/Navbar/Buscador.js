import { TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import styles from "../../styles/Buscador.module.css";

export default function Buscador() {
  return (
    <div id={styles.searchBox}>
      <form action="/search" id={styles.searchForm} method="get" target="_top">
        <input
          id={styles.searchText}
          name="q"
          placeholder="Buscar..."
          type="text"
        />
        <button id={styles.searchButton} type="submit">
          <Search/>
        </button>
      </form>
    </div>
  );
}
