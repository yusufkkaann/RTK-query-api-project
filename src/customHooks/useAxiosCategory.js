import axios from "axios";
import { useEffect, useState } from "react";
import { axiosCategories } from "./axiosApi";
import { useDispatch, useSelector } from "react-redux";
import {
  setData,
  setDataCategory,
  setError,
} from "../store/stateSlice/stateSlicer";

export default function useAxiosCategory(categoryName) {
  const dispatch = useDispatch();
  const { dataCategory, isError, isLoading, error } = useSelector(
    (state) => state.state
  );

  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  // const [error, setError] = useState();

  const fetchCategories = async () => {
    try {
      const response = await axiosCategories.get(
        `/images/search?limit=10&breed_ids=${categoryName}`
      );
      const responseData = await response.data;
      // setData(responseData);
      dispatch(setDataCategory(responseData));

      // setIsLoading(false);
    } catch (error) {
      dispatch(setError(error));
      // setIsError(true);
      // setError("veri alınamadı");
      throw new Error(error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return [dataCategory, isLoading, isError, error];
}
