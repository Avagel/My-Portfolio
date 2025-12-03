"use client";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import grid from "./assets/grid.png";
import { Carousel } from "flowbite-react";
import screenshot from "./assets/screenshot.png";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative  h-screen">
      <nav
        className={`w-full items-center transition-all duration-300 ${
          isMenuOpen ? "h-70 " : "h-11"
        } overflow-hidden fixed top-0  backdrop-blur-2xl shadow-lg z-5`}
      >
        <div className="px-10 flex justify-between items-center  shadow-lg  py-3">
          <p className="text-sm font-semibold">Akanume Iruoghene</p>
          <button
            className="text-custom-white"
            onClick={() => {
              setIsMenuOpen((prev) => !prev);
            }}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div className="   flex flex-col  py-3 text-xs font-normal">
          <a
            href="#home"
            className="hover:bg-zinc-950/50 px-15 py-3"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:bg-zinc-950/50 px-15 py-3"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            About
          </a>
          <a
            href="#skill"
            className="hover:bg-zinc-950/50 px-15 py-3"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:bg-zinc-950/50 px-15 py-3"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:bg-zinc-950/50 px-15 py-3"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Contact
          </a>
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
