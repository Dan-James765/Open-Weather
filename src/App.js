import Header from "./components/Header";
import LeftNavBar from "./components/LeftNavBar";
import Home from "./components/Home";
import "./components/AppGrow.css";

function App() {
  return (
    <>
      <div className="bg-gray-50">
        <Header className="" />
        <div className="flex">
          <LeftNavBar className="leftnavbar__component" />
          <Home className="home__component" />
        </div>
      </div>
    </>
  );
}

export default App;
