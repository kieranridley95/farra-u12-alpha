import { useState, React } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Fixtures from './pages/Fixtures'
import Squad from './pages/Squad'
import Contact from './pages/Contact'
import About from './pages/About'
import './index.css'
import FarraBadge from './pages/img/fdbadge.png'

import AlbumView from './pages/components/AlbumView'

import GalleryHome from './pages/components/GalleryHome'

import SliderTest from './pages/components/SliderTest'





function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-neutral-900/70 backdrop-blur border-b border-white/10">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                    <img
                        src={FarraBadge}
                        alt="Farringdon Detached U12 Logo"
                        className="h-9 w-9 rounded-full object-cover shadow-md"
                    />
                    <span className="font-semibold text-white">Farringdon Detached U12's</span>
                </Link>



                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link to="/fixtures" className="text-white/80 hover:text-white">Fixtures</Link>
                    <Link to="/gallery" className="text-white/80 hover:text-white">Gallery</Link>
                    <Link to="/sponsors" className="text-white/80 hover:text-white">Sponsors</Link>
                    <Link to="/squad" className="text-white/80 hover:text-white">Squad</Link>
                    <Link to="/about" className="text-white/80 hover:text-white">About</Link>
                    <Link to="/contact" className="text-white/80 hover:text-white">Contact</Link>
                    <Link to="/#join" className="ml-2 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold">Join Us</Link>
                </nav>

                {/* Mobile Toggle Button */}
                <button
                    className="md:hidden text-white text-2xl transition-all duration-900 ease-in-out transform hover:scale-110"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`transition-opacity duration-300 ${isOpen ? 'opacity-0 absolute' : 'opacity-100'}`}>
                        ☰
                    </span>
                    <span className={`transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 absolute'}`}>
                        ✕
                    </span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4">
                    <nav className="flex flex-col gap-3 text-white">
                        <Link to="/fixtures">Fixtures</Link>
                        <Link to="/gallery">Gallery</Link>
                        <Link to="/sponsors">Sponsors</Link>
                        <Link to="/squad">Squad</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/#join" className="mt-2 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-center">Join Us</Link>
                    </nav>
                </div>
            )}
        </header>
    )
}

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main className="pt-20">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/fixtures' element={<Fixtures />} />
          <Route path='gallery' element={<GalleryHome />} />
          <Route path='/squad' element={<Squad />} />
          <Route path='/about' element={<About />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/slider-test' element={<SliderTest />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)