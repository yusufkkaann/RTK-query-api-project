import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setData,
  setDataCategory,
  setError,
} from "../store/stateSlice/stateSlicer";
const CAT_API_URL = import.meta.env.VITE_CAT_API_URL;
const CAT_API_KEY = import.meta.env.VITE_CAT_API_KEY;

export default function useCategoryFetchApi(categoryName) {
  const { dataCategory, isError, isLoading, error } = useSelector(
    (store) => store.state
  );
  const dispatch = useDispatch();

  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  // const [error, setError] = useState();

  const fetchCategories = async () => {
    const response = await fetch(
      `${CAT_API_URL}/images/search?limit=10&breed_ids=${categoryName}`,
      {
        headers: {
          "x-api-key": CAT_API_KEY,
        },
      }
    );

    const responseData = await response.json();
    if (!response.ok) {
      dispatch(setError("Veri Alınamadı"));
      // setIsError(true);
      // setError("Veri Alınamadı");
      throw new Error("Veri Alınamadı"); // throw methodu ile hata fırlatıyoruz
    }
    dispatch(setDataCategory(responseData));
    // setData(responseData);
    // setIsLoading(false);
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return [dataCategory, isLoading, isError, error];
}
