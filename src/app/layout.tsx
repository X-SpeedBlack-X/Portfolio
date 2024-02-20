import "../styles/global.css";

import Layout from "@/components/Layout";
import { ReactNode } from "react";

import { ThemeProvider } from "@/components/Theme/theme-provider";
import { Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  authors: [{ name: "Isaque de Sousa" }],
  category: "developer",
  creator: "Isaque de Sousa",
  title: {
    default: "Home | Isaque de Sousa",
    template: "%s | Isaque de Sousa",
  },
  description:
    "Seja bem-vindo ao meu portfolio. Sou desenvolvedor web e sou apaixonado por criar sites e soluções de UI rápidos e fáceis de usar. Estou sempre ansioso para aprender novas habilidades e melhorar meus conhecimentos na area!",
  keywords: [
    "Isaque de Sousa",
    "Desenvolvedor Web",
    "Desenvolvedor Front-end",
    "Desenvolvedor FullStack",
    "Web Developer",
    "Front-end Developer",
    "FullStack Developer",
    "Brazil",
    "Next.js",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="pt-br">
        <head>
          <meta name="description" content="Generated by create next app" />

          <link rel="shortcut icon" href="/favicon/IS.svg" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>
          <ThemeProvider attribute="class" defaultTheme="system">
            <Toaster richColors />
            <Layout>
              <main>{children}</main>
            </Layout>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
