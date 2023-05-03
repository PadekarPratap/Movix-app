import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Details from "./pages/Details"
import Explore from "./pages/Explore"
import PageNotFound from "./pages/PageNotFound"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SearchResults from "./pages/SearchResults"
import ScrollToTop from "./components/ScrollToTop"



const App = () => {
  
  
  return (
    <div>
      <Header />
      <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/explore/:media_type" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </ScrollToTop>
      <Footer />
    </div>
  )
}

export default App