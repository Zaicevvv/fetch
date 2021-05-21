import useFetch from './useFetch';

function App() {
  const {data, error} = useFetch('https://api.quotable.io/random', res => console.log(res))

  return (
    <>
    {data && <p>{data}</p>}
    {error && <p>{error}</p>}
    </>
  )
};

export default App;