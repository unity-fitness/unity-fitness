export default function Footer(){
  return (
    <footer id="contato" className="section bg-navy text-white">
      <div className="container grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-extrabold">Unity Fitness</h3>
          <p className="mt-2 text-white/80">Seu desafio, nossa união.</p>
          <div className="mt-4 text-sm text-white/70">CNPJ: 00.000.000/0000-00</div>
        </div>
        <div>
          <h4 className="font-bold">Links</h4>
          <ul className="mt-2 space-y-2 text-white/80">
            <li><a href="/politica-privacidade">Política de Privacidade</a></li>
            <li><a href="/termos">Termos de Uso</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Fale com a gente</h4>
          <p className="mt-2 text-white/80">WhatsApp: <a className="underline" href="https://wa.me/5521996283859" target="_blank" rel="noreferrer">+55 (21) 99628-3859</a></p>
          <a className="btn-outline mt-3 inline-flex" href="https://wa.me/5521996283859?text=Quero%20conhecer%20a%20Unity%20Fitness" target="_blank">Chamar no Whats</a>
        </div>
      </div>
      <div className="mt-10 text-center text-white/60">© {new Date().getFullYear()} Unity Fitness. Todos os direitos reservados.</div>
    </footer>
  );
}
