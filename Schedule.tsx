export default function Schedule(){
  const rows = [
    ["Seg", "6h, 7h, 18h, 19h"],
    ["Ter", "6h, 7h, 18h, 19h"],
    ["Qua", "6h, 7h, 18h, 19h"],
    ["Qui", "6h, 7h, 18h, 19h"],
    ["Sex", "6h, 7h, 18h"],
    ["Sáb", "9h"],
  ];
  return (
    <section id="horarios" className="section">
      <div className="container">
        <h2 className="section-title">Horários</h2>
        <p className="section-subtitle">Escolha o horário que encaixa com sua rotina.</p>
        <div className="mt-6 overflow-hidden rounded-2xl shadow-sm">
          <table className="min-w-full bg-white">
            <tbody className="divide-y">
              {rows.map((r)=>(
                <tr key={r[0]} className="hover:bg-offwhite/60">
                  <td className="p-4 font-semibold">{r[0]}</td>
                  <td className="p-4 text-slate-600">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
