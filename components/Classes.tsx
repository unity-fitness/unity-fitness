"use client";
import { useState } from "react";

const tabs = [
  { key: "crossfit", title: "CrossFit", desc: "Aulas completas de força e condicionamento. Escalável para iniciantes."},
  { key: "corrida", title: "Corrida", desc: "Planilhas e treinos de pista/rua. Do 0 ao 21k e além."},
  { key: "hyrox", title: "HYROX", desc: "Treino híbrido: corrida + estações funcionais, estilo competição."},
];

export default function Classes(){
  const [active, setActive] = useState("crossfit");
  const current = tabs.find(t=>t.key===active)!;
  return (
    <section id="aulas" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Aulas & Programas</h2>
        <p className="section-subtitle">Escolha seu caminho e evolua com acompanhamento.</p>
        <div className="mt-6 flex gap-2 flex-wrap">
          {tabs.map(t=>(
            <button key={t.key} onClick={()=>setActive(t.key)} className={`px-4 py-2 rounded-xl border ${active===t.key? "bg-orange text-white border-orange" : "border-slate-200"}`}>{t.title}</button>
          ))}
        </div>
        <div className="mt-6 card">
          <h3 className="text-xl font-bold">{current.title}</h3>
          <p className="text-slate-600 mt-2">{current.desc}</p>
          <ul className="mt-4 grid md:grid-cols-3 gap-3 text-sm">
            <li className="p-3 rounded-xl bg-offwhite">Avaliação e onboarding</li>
            <li className="p-3 rounded-xl bg-offwhite">Plano semanal e metas</li>
            <li className="p-3 rounded-xl bg-offwhite">Suporte no WhatsApp</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
