import {useEffect} from "react";

function App() {
  useEffect(() => {
    fetch("/movies")
    .then((r) => r.json())
    .then((movies) => console.log(movies))
  }, []);
  return (
    <div className="App">
      <hi>Hello from React!</hi>
    </div>
  );
}

export default App;
