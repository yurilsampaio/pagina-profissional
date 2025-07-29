import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yuri Sampaio - Desenvolvedor de Software",
  description:
    "Portfolio profissional de Yuri Sampaio, desenvolvedor de software especializado em Delphi, C# .NET, React JS e outras tecnologias modernas.",
  keywords: "desenvolvedor, software, Delphi, React, Next.js, C#, .NET, portfolio",
  authors: [{ name: "Yuri Sampaio" }],
  openGraph: {
    title: "Yuri Sampaio - Desenvolvedor de Software",
    description:
      "Portfolio profissional de Yuri Sampaio, desenvolvedor de software especializado em Delphi, C# .NET, React JS e outras tecnologias modernas.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
