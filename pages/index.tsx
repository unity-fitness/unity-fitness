import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Unity Fitness — Treine com Propósito</title>
        <meta name="description" content="Cross, Ginástica, LPO, HYROX e Endurance. Aula experimental grátis. Ilha do Governador, RJ." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-slate-50 text-slate-800">
        <header className="bg-white shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <img src="/images/logo-unity.png" alt="Unity Fitness" className="h-12 w-auto" />
            <a href="https://api.whatsapp.com/send?phone=5521996283859&text=Oi%20quero%20minha%20aula%20experimental%20na%20Unity!" className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-xl font-semibold shadow">Agendar Aula</a>
          </div>
        </header>

        <section className="relative bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center">
          <div className="bg-slate-900/70">
            <div className="max-w-6xl mx-auto px-4 py-20 text-white text-center">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">CrossFit na Ilha do Governador — com método e acompanhamento real</h1>
              <p className="mt-4 md:mt-6 text-lg md:text-xl max-w-2xl mx-auto opacity-95">
                <strong>Aula experimental hoje</strong>. HYROX, LPO, Ginástica e Endurance para iniciantes e avançados. Turmas com check‑in e progressão segura.
              </p>
              <a href="https://api.whatsapp.com/send?phone=5521996283859&text=Oi%20quero%20minha%20aula%20experimental%20na%20Unity!" className="mt-6 inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-2xl font-semibold shadow">Agendar no WhatsApp</a>
            </div>
          </div>
        </section>

        <footer className="bg-slate-900 text-white py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="font-semibold">Unity Fitness</p>
            <p className="text-slate-400 mt-2">Seu desafio, nossa união.</p>
            <p className="text-sm text-slate-500 mt-4">© {new Date().getFullYear()} Unity Fitness. Todos os direitos reservados.</p>
          </div>
        </footer>
      </main>
    </>
  )
}
