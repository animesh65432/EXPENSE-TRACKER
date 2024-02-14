import "./App.css";
import { Usecontextalltime } from "./Components/Context/Context";
import SingandLog from "./Components/Login/SingandLog";
import Store from "./Components/Store/Store";

function App() {
  const { Onlogin, IsUserlog } = Usecontextalltime();
  return <>{IsUserlog ? <Store /> : <SingandLog />}</>;
}

export default App;
