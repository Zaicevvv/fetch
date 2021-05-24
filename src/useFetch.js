import { useState, useEffect, useRef } from 'react';
import axios from 'axios'

function useFetch(initialUrl, foo) {
const [url, setUrl] = useState(initialUrl)  
const [data, setData] = useState(null);
const [error, setError] = useState(null);
const isMounted = useRef(false)

useEffect(() => {
  isMounted.current = true;
  const source = axios.CancelToken.source();

  axios.get(url, { cancelToken: source.token })
   .then(res => {
     if (!isMounted.current) return;
     res.data.content && foo(res.data.content) && setData(res.data.content);
     res.content && foo(res.content) && setData(res.content);
   })
   .catch(e => setError(e.message))

  return () => {
    source.cancel();
    isMounted.current = false;
  }
 
},[url, foo]);

  return { data, error, setUrl }
};

export default useFetch;