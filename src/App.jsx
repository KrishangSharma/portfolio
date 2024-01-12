// Components Import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages Import
import { Home } from "./pages/exports";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
