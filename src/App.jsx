import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Sobrenos from "./pages/Sobrenos";
import Home from "./pages/Home";

function App() {

  return (
    <Router>
      <div className="bg-white min-h-screen m-0 p-0 flex flex-col dark:bg-zinc-900 text-zinc-900 dark:text-white">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobrenos />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
