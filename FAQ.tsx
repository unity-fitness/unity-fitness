"use client";
import { useState } from "react";

const items = [
  { q: "Sou iniciante. Posso começar?", a: "Sim! Todas as aulas têm variações e começamos com um onboarding para ajustar cargas e movimentos." },
  { q: "Preciso agendar?", a: "Recomendamos reservar sua vaga pelo WhatsApp para garantir seu horário." },
  { q: "Tem treino de corrida?", a: "Sim. Temos planilhas personalizadas e treinos presenciais em grupo." },
  { q: "Onde ficam vocês?", a: "Ilha do Governador, Rio de Janeiro. Envie 'LOCALIZAÇÃO' no WhatsApp que mandamos o endereço." },
];

export default function FAQ(){
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section">
      <div className="container">
        <h2 className="section-title">Perguntas Frequentes</h2>
        <div className="mt-6 space-y-3">
          {items.map((it, idx)=>(
            <div key={it.q} className="card">
              <button className="w-full text-left font-semibold flex items-center justify-between" onClick={()=> setOpen(open===idx? null : idx)}>
                <span>{it.q}</span>
                <span>{open===idx? "–" : "+"}</span>
              </button>
              {open===idx && <p className="mt-2 text-slate-600">{it.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
