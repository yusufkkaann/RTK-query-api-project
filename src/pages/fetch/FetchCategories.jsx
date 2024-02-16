import { Link } from "react-router-dom";
import LoadingComponents from "../../components/LoadingComponents";
import useCategoriesFetchApi from "../../customHooks/useCategoriesFetchApi";

export default function FetchCategories() {
  const [data, isLoading, isError, error] = useCategoriesFetchApi();

  return (
    <div className="col-sm-12">
      <h1>Fetch: Categories</h1>
      {isError ? <h2>{error}</h2> : isLoading ? <LoadingComponents /> : ""}

      <ul className="list-group">
        {data.map((item) => (
          <li className="list-group-item" key={item.id}>
            <Link to={`/fetch-category/${item.id}`}> {item.name} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
