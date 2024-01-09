import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://fakestoreapi.com/${endpoint}`);
      setData(response.data);
      setIsLoading(false);
      console.log(data);
    } catch (err) {
      setError(error);
      alert("There is an error" + error);
      console.log(err);
    } finally{
      setIsLoading(false)
    }
  };

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const refetch = () => {
    setIsLoading(true);
    getData();
  };
  return { data, isLoading, error, refetch };
};

export default useFetch;