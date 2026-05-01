import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import grid from "./assets/grid.png";
import { Menu, X } from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" }, // Fixed: was #skill
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="relative h-screen flex items-center flex-col">
      <nav
        className={`w-full items-center transition-all duration-300 ${
          isMenuOpen ? "h-70" : "h-11"
        } overflow-hidden fixed top-0 backdrop-blur-2xl shadow-lg z-5 lg:h-auto lg:overflow-visible`}
      >
        <div className="px-10 flex justify-between items-center shadow-lg py-3">
          <p className="text-sm font-semibold">Akanume Iruoghene</p>

          {/* Desktop nav links */}
          <div className="hidden lg:flex gap-8 text-xs font-normal">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="hover:text-custom-blue transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <button
            className="text-custom-white lg:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className="flex flex-col py-3 text-xs font-normal lg:hidden">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="hover:bg-zinc-950/50 px-15 py-3"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      <img
        className="fixed inset-0 z-0 w-full h-full opacity-15"
        alt=""
        src={grid}
      />
      <Home />
    </div>
  );
}

export default App;
