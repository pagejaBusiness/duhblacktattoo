import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "INÍCIO", href: "#home" },
    { name: "SOBRE", href: "#about" },
    { name: "GALERIA", href: "#gallery" },
    { name: "AVALIAÇÕES", href: "#reviews" },
    { name: "CONTATO", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = scrolled
    ? "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out bg-dark/95 backdrop-blur-md shadow-2xl border-b border-purple-light/20"
    : "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out bg-transparent";

  const mobileMenuClasses = isMenuOpen
    ? "md:hidden overflow-hidden transition-all duration-500 ease-out max-h-96 opacity-100"
    : "md:hidden overflow-hidden transition-all duration-500 ease-out max-h-0 opacity-0";

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 group">
            <h1 className="text-3xl font-bold text-white tracking-wide cursor-pointer transition-all duration-300 group-hover:scale-105">
              <span className="italic font-light">DuhBlack </span>
              <span className="text-purple-light ml-1 font-black relative">
                Tattoo
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple to-purple-light transition-all duration-500 group-hover:w-full"></div>
              </span>
            </h1>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium tracking-wider text-white transition-all duration-300 group hover:text-purple-light rounded-lg hover:bg-purple-light/10"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {item.name}
                  <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple to-purple-light transition-all duration-300 group-hover:w-3/4 transform -translate-x-1/2 rounded-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Botão Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-3 text-white hover:text-purple-light transition-all duration-300 hover:bg-purple-light/10 rounded-lg group"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isMenuOpen
                      ? "opacity-0 rotate-180 scale-75"
                      : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <X
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isMenuOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 rotate-180 scale-75"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden fixed top-20 left-0 right-0 z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Fundo com blur e sombra */}
        <div className="absolute inset-0 bg-dark/98 backdrop-blur-md border-t border-purple-light/20 shadow-2xl"></div>

        {/* Conteúdo do menu */}
        <div className="relative px-4 py-6 space-y-2">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-4 text-base font-medium tracking-wider text-white hover:text-purple-light hover:bg-purple-light/10 transition-all duration-300 rounded-xl text-center relative group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.name}
              <div className="absolute bottom-2 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple to-purple-light transition-all duration-300 group-hover:w-1/3 transform -translate-x-1/2 rounded-full"></div>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
