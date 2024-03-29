// Components Import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages Import
import { Home, Projects } from "./pages/exports";
import { Navbar, Footer } from "./components/exports";

function App() {
  return (
    <div className="flex flex-col min-h-screen body-background">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/projects" exact element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
