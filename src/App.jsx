// Components Import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages Import
import { Home, Projects, BlogContainer } from "./pages/exports";
import { Navbar, Footer, Blog } from "./components/exports";

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden ">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/blogs" exact element={<BlogContainer />} />
          <Route path="/blog/:id" exact element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
