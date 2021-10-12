import "./App.css";
import "./resets.css";
import Header from "./Components/Header/Header";
import { useData } from "./hooks/useData";

function App() {
  return (
    <table className="container">
      <Header title="CORONA" />
    </table>
  );
}

export default App;
