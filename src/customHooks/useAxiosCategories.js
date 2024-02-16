import axios from "axios";
import { useEffect, useState } from "react";
import { axiosCategories } from "./axiosApi";
import { useDispatch, useSelector } from "react-redux";
import {
  setData,
  setDataCategory,
  setError,
} from "../store/stateSlice/stateSlicer";

export default function useAxiosCategories() {
  const { data, isError, isLoading, error } = useSelector(
    (store) => store.state
  );
  const dispatch = useDispatch();
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  // const [error, setError] = useState();

  const fetchCategories = async () => {
    try {
      const response = await axiosCategories.get("/breeds");
      const responseData = await response.data;
      dispatch(setData(responseData));
      // setIsLoading(false);
    } catch (error) {
      setError(error);
      throw new Error(error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return [data, isLoading, isError, error];
}
