import { Usecontextalltime } from "./Components/Context/Context";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import SingandLog from "./Components/Login/SingandLog";
import Profile from "./Components/Profile/Profile";
import Store from "./Components/Store/Store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SetPassword from "./Password/SetPassword";
import AddExpenses from "./Components/Expense/AddExpenses";
import Expense from "./Components/Expense/Expense";

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
            <Route path="/AddExpenses" element={<AddExpenses />}></Route>
            <Route path="/Expenses" element={<Expense />}></Route>
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
