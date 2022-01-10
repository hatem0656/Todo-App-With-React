import { useEffect, useState } from "react";

const useFetch = (url, listRefresh) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data from the resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    }, 10);
  }, [url, listRefresh]);

  return { loading, data, error };
};

export default useFetch;
