import Home from "./components/Home/Home";
import Results from "./components/results/Results";
import Footer from "./components/shared/footer/Footer"
import Navbar from "./components/shared/navbar/Navbar"
import { Routes, Route} from "react-router-dom";
import SearchProvider from './context/SearchProvider';
import NotFound from "./components/shared/notfound/NotFound";


function App() {

  return (
    <SearchProvider>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/results/:searchTerm" element={<Results/>} />  
            <Route path="*" element={<NotFound/>} />
        </Routes>
      <Footer/> 
  </SearchProvider>
  )
}

export default App
