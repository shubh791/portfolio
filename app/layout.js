import './globals.css'

export const metadata = {
  title: 'Shubham Panghal | Full-Stack Developer',
  description: 'Full-Stack Developer specializing in React, Next.js, Node.js — crafting fast, scalable digital products.',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%25' stop-color='%23818cf8'/><stop offset='100%25' stop-color='%2322d3ee'/></linearGradient></defs><rect width='48' height='48' rx='10' fill='%23040411'/><text x='6' y='33' font-family='Arial' font-size='22' font-weight='800' fill='url(%23g)'>SP</text></svg>",
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body style={{ background: '#040411', color: '#e2e8f0' }}>
        {children}
      </body>
    </html>
  )
}
