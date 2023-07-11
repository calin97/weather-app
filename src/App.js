import Basic from "./components/dashBoard";
import Header from "./components/header";


function App() {
  console.log('Api-KEY', process.env.REACT_APP_API_KEY);
  return (
    <>
      <Header />
      <div>
        <Basic />
      </div>
    </>
  );
}

export default App;
