import { useState, useEffect } from 'react';
import axios from 'axios'

function useFetch(url, foo) {
const [data, setData] = useState(null)
const [error, setError] = useState(null)

useEffect(() => {
axios.get(url)
 .then(res => {
     res.data.content && foo(res.data.content) && setData(res.data.content);
     res.content && foo(res.content) && setData(res.content);
 })
 .catch(e => setError(e.message))},[])

  return { data, error }
  };

export default useFetch;