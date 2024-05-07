import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const font = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Petal | Aumente las ventas de los comercios en su plataforma',
  description: 'Crédito como servicio para los vendedores en su plataforma',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body className={font.className}>{children}</body>
      </html>
  )
}