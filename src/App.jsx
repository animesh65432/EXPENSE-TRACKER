import { Usecontextalltime } from "./Components/Context/Context";
import Header from "./Components/Header/Header";
import SingandLog from "./Components/Login/SingandLog";
import Profile from "./Components/Profile/Profile";
import Store from "./Components/Store/Store";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const { IsUserlog } = Usecontextalltime();
  console.log(IsUserlog);
  return (
    <>
      {IsUserlog ? (
        <BrowserRouter>
          <Header />
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
