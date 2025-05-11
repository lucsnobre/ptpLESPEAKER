import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "Lespeaker Áudio Part's",
  description: "Reparos especializados em equipamentos de áudio e automotivos com qualidade superior e atendimento personalizado.",
  icons: {
    icon: "/images/logos/logoles.png" 
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <ClientBody />
      </body>
    </html>
  );
}
