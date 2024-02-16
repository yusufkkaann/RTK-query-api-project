import React from "react";
import useAxiosCategories from "../../customHooks/useAxiosCategories";
import LoadingComponents from "../../components/LoadingComponents";
import { Link } from "react-router-dom";

export default function AxiosCategories() {
  const [data, isLoading, isError, error] = useAxiosCategories();
  console.log(data);
  return (
    <div className="col-sm-12">
      <h1>Axios: Categories</h1>
      {isError ? <h2>{error}</h2> : isLoading ? <LoadingComponents /> : ""}

      <ul className="list-group">
        {data.map((item) => (
          <li className="list-group-item" key={item.id}>
            <Link to={`/axios-category/${item.id}`}> {item.name} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
