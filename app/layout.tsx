import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unity Fitness — Seu desafio, nossa união",
  description: "CrossFit, corrida e treino híbrido na Ilha do Governador.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GOOGLE_ADS_ID = "AW-17383160932"; // confirme seu ID aqui
  return (
    <html lang="pt-br">
      <head>
        {/* Google Ads Tag (gtag.js) */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GOOGLE_ADS_ID}');
            `,
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
