import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData, setError } from "../store/stateSlice/stateSlicer";
const CAT_API_URL = import.meta.env.VITE_CAT_API_URL;

export default function useCategoriesFetchApi() {
  const { data, isError, isLoading, error } = useSelector(
    (state) => state.state
  );

  const dispatch = useDispatch();
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  // const [error, setError] = useState();

  const fetchCategories = async () => {
    const response = await fetch(`${CAT_API_URL}/breeds`);
    const responseData = await response.json();
    if (!response.ok) {
      dispatch(setError("Veri Alınamadı"));
      // setIsError(true);
      // setError("Veri Alınamadı");
      // throw new Error("Veri Alınamadı"); // throw methodu ile hata fırlatıyoruz
    }
    dispatch(setData(responseData));
    // setData(responseData);
    // setIsLoading(false);
  };
  useEffect(() => {
    setTimeout(() => fetchCategories(), 1500);
  }, []);
  return [data, isLoading, isError, error];
}
