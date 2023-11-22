import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./page/Home";
import CategoryPage from "./page/CategoryPage";
import Login from "./page/Login";
import Register from "./page/Register";
import ReserveScreen from "./page/ReserveScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage } from "./page/ErrorPage";
import SingleHotelView from "./page/SingleHotelView";
import GlobleCotext from "./contextApi/GlobleContex";

function App() {
  return (
    <>
    <GlobleCotext>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Category" element={<CategoryPage/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Reserve" element={<ReserveScreen/>}/>
          <Route path={`/SingleHotelView/:id`} element={<SingleHotelView/>} />
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
      </GlobleCotext>
    </>
  );
}

export default App;
