import { Usecontextalltime } from "./Components/Context/Context";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import SingandLog from "./Components/Login/SingandLog";
import Profile from "./Components/Profile/Profile";
import Store from "./Components/Store/Store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SetPassword from "./Password/SetPassword";

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
          <Footer />
        </BrowserRouter>
      ) : (
        <>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<SingandLog />}></Route>
              <Route path="/Reset" element={<SetPassword />}></Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </>
      )}
    </>
  );
}

export default App;
