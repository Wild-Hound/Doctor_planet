import "./App.scss";
import MainNav from "./Components/MainNav/MainNav";
import DocSearchSec from "./Pages/HomePage/DocSearchSec/DocSearchSec";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <MainNav />
      <HomePage />
      <DocSearchSec />
    </div>
  );
}

export default App;
