import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Details from "./pages/Details"
import Explore from "./pages/Explore"
import PageNotFound from "./pages/PageNotFound"
import Header from "./components/Header"
import Footer from "./components/Footer"



const App = () => {
  
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Details />} />
        <Route path="/" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App