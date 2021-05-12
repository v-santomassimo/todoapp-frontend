import "./App.css";
import Navbar from "./components/navbar";
import TodoContainer from "./components/todocontainer";

function App() {
  return (
    <div className="App-header">
      <Navbar />
      <TodoContainer />
    </div>
  );
}

export default App;
