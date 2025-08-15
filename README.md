# Unity Fitness - Landing Page (Next.js + Tailwind + Google Ads)

Este projeto cria uma landing page de alta conversão para seu box, inspirada em SimpleGym e Champs.

## 1) Começar do ZERO (local)

```bash
# Requer Node 18+
npm i
npm run dev
# acesse http://localhost:3000
```

## 2) Subir no GitHub
1. Crie um repositório novo (ex.: `unity-fitness`) no seu GitHub.
2. No terminal, dentro da pasta do projeto:
```bash
git init
git add .
git commit -m "feat: landing page unity"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/unity-fitness.git
git push -u origin main
```

## 3) Deploy na Vercel
1. Acesse **vercel.com/new** e clique em **Import Git Repository**.
2. Selecione o repo `unity-fitness` e prossiga com as configurações padrão.
3. Vercel detecta Next.js automaticamente. Clique em **Deploy**.
4. Aponte seu domínio (se houver) e pronto.

## 4) Google Ads (gtag)
- O ID está em `app/layout.tsx`: `AW-17383160932`. Substitua se necessário.
- Para conversões, crie eventos no Google Ads e adicione o snippet recomendado ou use `gtag('event', ...)` nos botões.

## 5) Personalizações rápidas
- **WhatsApp**: altere o número nos componentes `Navbar`, `Hero`, `Pricing` e `Footer`.
- **Planos**: edite links de pagamento em `components/Pricing.tsx`.
- **Horários**: atualize `components/Schedule.tsx`.
- **Texto/Seções**: ajuste componentes conforme sua realidade.

## 6) Problemas comuns
- Erro `npm run build`: cheque versões do Node (18+) e dependências.
- Tela branca: veja o console do navegador e os logs na Vercel.
- Tag Ads não dispara: confirme o ID e se o bloqueador de anúncios está desativado.

Boa! Qualquer ajuste de copy/estilo, me chama.
