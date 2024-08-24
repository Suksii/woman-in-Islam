import Navbar from "./components/Navbar.jsx";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import Hidzab from "./pages/Hidzab.jsx";
import IslamWomen from "./pages/IslamWomen.jsx";
import FamilyAndMarriage from "./pages/FamilyAndMarriage.jsx";
import Contact from "./pages/Contact.jsx";
import LogoSection from "./components/LogoSection.jsx";

function App() {

  return (
      <>
        <LogoSection/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path='/hidzab' element={<Hidzab/>}/>
          <Route path='/polozaj-zena-u-islamu' element={<IslamWomen/>}/>
          <Route path='/porodica-i-brak' element={<FamilyAndMarriage/>} />
          <Route path='/kontakt' element={<Contact/>}/>
        </Routes>
      </>
  )
}


export default App
