import Navbar from './components/navbar/navbar'
import Chat from './components/chat/chat'
import { Routes, Route } from "react-router-dom"
import AboutPage from "./pages/About"
import ProjectsPage from "./pages/Projects"
import ExperiencesPage from "./pages/Experiences"

import './App.css'

function App() {
    return (
        <>
            <Chat/>
            <Navbar/>   
            <Routes>
                <Route path="/" element={<AboutPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/experiences" element={<ExperiencesPage />} />
            </Routes>
        </>
    )
}

export default App