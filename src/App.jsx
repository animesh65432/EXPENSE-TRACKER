import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import SingandLog from "./Components/Login/SingandLog";
import Profile from "./Components/Profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SetPassword from "./Password/SetPassword";
import AddExpenses from "./Components/Expense/AddExpenses";
import { useSelector } from "react-redux";
import Store from "./Components/Stroe/Store";
import UserProfile from "./Components/Profile/UserProfile";

function App() {
  let value = useSelector((state) => state.Auth.tokens);
  let theme = useSelector((state) => state.toggole.value);
  console.log(theme);
  const IsUserlog = !!value;

  return (
    <>
      {IsUserlog ? (
        <BrowserRouter>
          <Header />
          <div id={`${theme}`}>
            <Routes>
              <Route path="/" element={<Store />}></Route>
              <Route path="/Profile" element={<Profile />}></Route>
              <Route path="/AddExpenses" element={<AddExpenses />}></Route>
              <Route path="/Userprofile" element={<UserProfile />}></Route>
            </Routes>
            <Footer />
          </div>
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
