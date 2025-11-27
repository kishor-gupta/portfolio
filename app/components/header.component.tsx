"use client";

import Link from "next/link";

export const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-heading font-bold text-brand-dark">
              Kishor Gupta<span className="text-brand-primary">•</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection("home")} className="font-medium hover:text-brand-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection("about")} className="font-medium hover:text-brand-primary transition-colors">About</button>
            <button onClick={() => scrollToSection("services")} className="font-medium hover:text-brand-primary transition-colors">Services</button>
            <button onClick={() => scrollToSection("projects")} className="font-medium hover:text-brand-primary transition-colors">Projects</button>
            <button onClick={() => scrollToSection("contact")} className="font-medium hover:text-brand-primary transition-colors">Contact</button>
          </div>
          
          <div>
            <button onClick={() => scrollToSection("contact")} className="py-2 px-4 bg-brand-primary text-white rounded-full hover:bg-opacity-90 transition-colors">
              Hire Me
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

