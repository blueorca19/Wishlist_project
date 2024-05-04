
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={< />} />
              <Route path="/" element={< />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;