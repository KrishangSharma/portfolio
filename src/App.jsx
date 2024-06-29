// Components Import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages Import
import { Home, Projects, ContactMe } from "./pages/exports";
import { Navbar, Footer } from "./components/exports";

function App() {
  return (
    <>
      <div className="w-full h-screen flex flex-col gap-5">
        <Router>
          <Navbar />
          {/* Main Container */}
          <main className="w-full h-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<ContactMe />} />
            </Routes>
            <Footer />
          </main>
        </Router>
      </div>
    </>
  );
}

export default App;
