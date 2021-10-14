import cl from "./Search.module.css";
import { useData } from "../../hooks/useData";

export default function Search() {
  const [{ searchQuery }, dispatch] = useData();
  return (
    <div className={cl.wrapper}>
      <form className={cl.searchForm}>
        <button type="submit" className={cl.button} disabled>
          &#128269;
        </button>
        <input
          type="text"
          onChange={(e) => dispatch({ type: "SEARCH", payload: e.target.value })}
          className={cl.input}
          name="searchPlace"
          placeholder="search by region"
          value={searchQuery}
        />
      </form>
    </div>
  );
}
