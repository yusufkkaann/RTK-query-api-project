import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import CatCard from "../../components/CatCard";
import Row from "../../components/Row";

import LoadingComponents from "../../components/LoadingComponents";
import { useFetchCategoryQuery } from "../../store/catApi/catApiSlicer";

export default function RTKQueryCategory() {
  const { categoryName } = useParams(); //url deki parametreleri almak için kullanılır
  console.log(categoryName);
  const { data, isLoading, isError, error } =
    useFetchCategoryQuery(categoryName);

  return (
    <div className="col-sm-12">
      RTK Query Category: {categoryName}
      {isError ? <h2>{error}</h2> : isLoading ? <LoadingComponents /> : ""}
      <Row className="row-cols-sm-3">
        {data?.map((item) => (
          <CatCard
            key={item.id}
            imgSrc={item.url}
            description={item.breeds[0].description}
            name={item.breeds[0].name}
            link={item.breeds[0].wikipedia_url}
          />
        ))}
      </Row>
    </div>
  );
}
