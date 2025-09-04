export default function Pricing(){
  const plans = [
    { name: "Mensal", price: 290, desc: "Acesso total às aulas.", badge: "Mais popular", link: "https://seu-link-de-pagamento-mensal" },
    { name: "Semestral", price: 269, desc: "Economize e mantenha a constância.", link: "https://seu-link-de-pagamento-semestral" },
    { name: "Anual", price: 219, desc: "Melhor custo-benefício.", link: "https://seu-link-de-pagamento-anual" },
  ];
  return (
    <section id="planos" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Planos</h2>
        <p className="section-subtitle">Sem burocracia.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {plans.map(p=>(
            <div key={p.name} className="card">
              {p.badge && <div className="text-xs inline-block bg-orange text-white px-2 py-1 rounded-full">{p.badge}</div>}
              <h3 className="mt-2 text-xl font-bold">{p.name}</h3>
              <div className="mt-2 text-3xl font-black">R${p.price}<span className="text-base font-semibold text-slate-500">/mês</span></div>
              <p className="mt-2 text-slate-600">{p.desc}</p>
              <div className="mt-4 flex gap-2">
                <a className="btn-primary" href={p.link} target="_blank" rel="noreferrer">Assinar</a>
                <a className="btn-outline" href="https://wa.me/5521996283859?text=Quero%20assinar%20um%20plano%20Unity" target="_blank">Tirar dúvidas</a>
              </div>
              <ul className="mt-4 text-sm text-slate-600 space-y-1">
                <li>• Acesso a todas as aulas</li>
                <li>• Comunidade e eventos</li>
                <li>• Suporte pelo WhatsApp</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
