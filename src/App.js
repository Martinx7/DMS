import Navbar from "./components/Navbar"
import Contact from "./pages/Contact"
import Ebooks from "./pages/Ebooks"
import Invbooks from "./pages/Invbooks"
import Home from "./pages/Home"
import Audiobooks from "./pages/Audiobooks"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"

function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/Ebooks" element={<Ebooks />} />
                    <Route path="/Audiobooks" element={<Audiobooks />} />
                    <Route path="/Invbooks" element={<Invbooks />} />
                </Routes>
            </div>
        </>
    )
}

export default App