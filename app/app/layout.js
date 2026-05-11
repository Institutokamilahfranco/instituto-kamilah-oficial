export const metadata = {
  title: "Instituto Kamilah Franco",
  description: "Desenvolvimento feminino e expansão emocional"
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  )
}
