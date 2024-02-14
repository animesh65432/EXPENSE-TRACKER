import "./App.css";
import { Usecontextalltime } from "./Components/Context/Context";
import SingandLog from "./Components/Login/SingandLog";
import Profile from "./Components/Profile/Profile";
import Store from "./Components/Store/Store";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const { Onlogin, IsUserlog } = Usecontextalltime();
  return (
    <>
      {IsUserlog ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Store />}></Route>
            <Route path="/Profile" element={<Profile />}></Route>
          </Routes>
        </BrowserRouter>
      ) : (
        <SingandLog />
      )}
    </>
  );
}

export default App;
