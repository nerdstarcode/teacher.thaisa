import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    url: "https://teacherthaisa.com.br",
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
    canonical: "https://teacherthaisa.com.br",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
