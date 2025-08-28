 export default function Hero(){
   return (
    <section className="section pt-36 md:pt-44 bg-gradient-to-b from-white to-offwhite">
      <div className="container grid md:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight">
            Treine com propósito.<br/>Resultados que você sente no dia a dia.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            CrossFit, corrida e treino híbrido com coaching real. Programas para iniciantes e avançados, na Ilha do Governador.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-primary" href="#planos">Ver Planos</a>
            <a className="btn-outline" href="https://wa.me/5521996283859?text=Quero%20come%C3%A7ar%20na%20Unity!" target="_blank">Falar no WhatsApp</a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
            <div>★ ★ ★ ★ ★ <span className="font-semibold">+100 avaliações</span></div>
            <div>“Seu desafio, nossa união.”</div>
          </div>
        </div>
        <div className="card">
          <video className="w-full rounded-xl" src="" controls={false} autoPlay muted loop playsInline poster="">
            {/* Adicione um vídeo curto de treinos ou uma imagem aqui (public/hero.webp) */}
          </video>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <div className="p-4 rounded-xl bg-offwhite">
              <div className="text-2xl font-black">30'</div>
              <div className="text-xs text-slate-600">para iniciar</div>
            </div>
            <div className="p-4 rounded-xl bg-offwhite">
              <div className="text-2xl font-black">+18</div>
              <div className="text-xs text-slate-600">vagas por aula</div>
            </div>
            <div className="p-4 rounded-xl bg-offwhite">
              <div className="text-2xl font-black">7d</div>
              <div className="text-xs text-slate-600">por semana</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
