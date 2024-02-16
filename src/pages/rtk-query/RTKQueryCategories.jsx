import React from "react";
import { useFetchCategoriesQuery } from "../../store/catApi/catApiSlicer";
import LoadingComponents from "../../components/LoadingComponents";
import { Link } from "react-router-dom";

export default function RTKQueryCategories() {
  const { data, isError, isLoading, error } = useFetchCategoriesQuery();
  console.log(data);
  return (
    <div className="col-sm-12">
      <h1>RTK Query: Categories</h1>
      {isError ? <h2>{error}</h2> : isLoading ? <LoadingComponents /> : ""}

      <ul className="list-group">
        {data?.map((item) => (
          <li className="list-group-item" key={item.id}>
            <Link to={`/rtk-query-category/${item.id}`}> {item.name} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
