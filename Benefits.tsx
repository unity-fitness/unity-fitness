const items = [
  { title: "Metodologia inteligente", desc: "Planos de treino estruturados para garantir evolução com segurança e constância."},
  { title: "Acompanhamento próximo", desc: "Professores atenciosos que corrigem, orientam e acompanham você de perto."},
  { title: "Ambiente acolhedor", desc: "Aqui você encontra motivação, amizade e um espaço onde todos são bem-vindos, independente do nível ou objetivo."},
  { title: "Resultados reais", desc: "Mais energia no dia a dia, condicionamento, emagrecimento e força para transformar a sua rotina."},
];
export default function Benefits(){
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Por que treinar na Unity?</h2>
        <p className="section-subtitle">Treino planejado, acompanhamento de perto e uma comunidade que apoia você.</p>
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
