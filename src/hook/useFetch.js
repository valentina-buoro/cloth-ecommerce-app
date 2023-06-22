import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /*const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': '836fe20de9mshb23d004e363fc78p1a36cdjsnc9164e16ced5',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query }
  };

  const options = {
    method: 'GET',
    url: `https://amazon23.p.rapidapi.com/${endpoint}`,
    
    headers: {
      'X-RapidAPI-Key': '836fe20de9mshb23d004e363fc78p1a36cdjsnc9164e16ced5',
      'X-RapidAPI-Host': 'amazon23.p.rapidapi.com'
    }, params:{...query}
  };



  const fetchData = async () => {
    setIsLoading(true);
    
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error" + error);
    } finally {
      setIsLoading(false);
    }
  };*/

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
  },);

  const refetch = () => {
    setIsLoading(true);
    getData();
  };
  return { data, isLoading, error, refetch };
};

export default useFetch;