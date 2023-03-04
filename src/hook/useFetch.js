import { useState } from 'react';

const useFetch = (url,headers = {}, body, method) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}${url}`, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        ...body && {
          body : JSON.stringify(body)
        }
      });
      const result = await response.json();
      //console.log(result);
      setData(result);
    } 
    catch (error) {
      //console.log(error);
      setError(error);
    } 
    finally {
      setTimeout(()=>{
        setIsLoading(false);
      },1000)
    }
  };
  return { data, isLoading, error, fetchData };
};

export default useFetch;