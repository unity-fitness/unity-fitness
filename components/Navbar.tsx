"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#aulas", label: "Aulas" },
  { href: "#horarios", label: "Horários" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "Perguntas" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar(){
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  },[]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition ${scrolled ? "backdrop-blur bg-white/80 shadow" : ""}`}>
      <nav className="container flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2 font-extrabold text-lg">
          <span className="inline-block h-8 w-8 rounded-xl bg-orange" />
          Unity <span className="text-orange">Fitness</span>
        </a>
        <ul className="hidden md:flex items-center gap-6">
          {links.map(l=>(
            <li key={l.href}><a className="nav-link" href={l.href}>{l.label}</a></li>
          ))}
        </ul>
        <div className="hidden md:block">
          <a className="btn-primary" href="https://wa.me/5521996283859?text=Oi%20Unity!%20Quero%20come%C3%A7ar%20a%20treinar." target="_blank">Começar no WhatsApp</a>
        </div>
        <button className="md:hidden btn-outline px-4 py-2" onClick={()=>{
          const menu = document.getElementById("mobile-menu");
          if(menu) menu.classList.toggle("hidden");
        }}>Menu</button>
      </nav>
      <div id="mobile-menu" className="md:hidden hidden">
        <div className="container pb-4 flex flex-col gap-3">
          {links.map(l=>(<a key={l.href} className="nav-link" href={l.href}>{l.label}</a>))}
          <a className="btn-primary mt-2" href="https://wa.me/5521996283859?text=Oi%20Unity!%20Quero%20come%C3%A7ar%20a%20treinar." target="_blank">Começar no WhatsApp</a>
        </div>
      </div>
    </header>
  );
}
