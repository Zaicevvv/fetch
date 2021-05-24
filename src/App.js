import useFetch from './useFetch';

function App() {
  const {data, error, setUrl} = useFetch('https://api.quotable.io/random', res => console.log(res))

  // setUrl('https://cat-fact.herokuapp.com/facts')

  return (
    <>
    {data && <p>{data}</p>}
    {error && <p>{error}</p>}
    </>
  )
};

export default App;