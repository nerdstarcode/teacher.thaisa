import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Professora de Inglês no Rio de Janeiro | Teacher Thaisa",
  description:
    "Aprenda inglês com a professora Thaisa, do Rio de Janeiro. Aulas online para crianças, adolescentes e adultos com foco em conversação e fluência. Preços acessíveis e horários flexíveis.",
  keywords: [
    "professora de inglês",
    "aulas de inglês Rio de Janeiro",
    "aulas de inglês online",
    "inglês para crianças",
    "inglês para adolescentes",
    "teacher Thaisa",
    "curso de inglês particular",
    "acessivel",
    "boa",
    "criança",
    "aulas",
    "inglês",
    "online",
  ],
  authors: [{ name: "Teacher Thaisa" }],
  openGraph: {
    title: "Teacher Thaisa | Aulas de Inglês Online e no Rio de Janeiro",
    description:
      "Professora de inglês no Rio de Janeiro. Aulas online e presenciais para todas as idades, com foco em fluência e confiança para falar inglês.",
    url: "https://teacherthaisa-production.up.railway.app",
    siteName: "Teacher Thaisa",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teacher Thaisa - Professora de Inglês",
      },
    ],
  },
  alternates: {
    canonical: "https://teacherthaisa-production.up.railway.app",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Hotjar Tracking Script */}
      <Script id="hotjar-init" strategy="afterInteractive">
        {`
            (function(h,o,t,j,a,r){
              h.hj = h.hj || function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:6548276,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
