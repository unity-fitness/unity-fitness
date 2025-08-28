export default function SocialProof(){
  const logos = ["Cliente A","Cliente B","Cliente C","Cliente D","Cliente E"];
  return (
    <section className="section">
      <div className="container">
        <p className="uppercase text-xs tracking-widest text-slate-500">Feedback dos nossos alunos</p>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-4">
          {logos.map((l,i)=>(
            <div key={i} className="h-12 rounded-xl bg-white shadow-sm grid place-items-center text-slate-500">{l}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
