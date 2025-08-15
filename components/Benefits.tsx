const items = [
  { title: "Metodologia clara", desc: "Ciclos de treino planejados para evoluir com segurança."},
  { title: "Coaching de verdade", desc: "Acompanhamento próximo na aula e via consultoria online."},
  { title: "Comunidade", desc: "Ambiente acolhedor e motivador, para todos os níveis."},
  { title: "Resultados", desc: "Força, condicionamento e saúde que refletem no seu dia a dia."},
];
export default function Benefits(){
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Por que treinar na Unity?</h2>
        <p className="section-subtitle">Foco em pessoas, ciência do treino e constância.</p>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {items.map((i)=>(
            <div key={i.title} className="card hover:shadow-md transition">
              <h3 className="font-bold text-lg">{i.title}</h3>
              <p className="text-slate-600 mt-2">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
