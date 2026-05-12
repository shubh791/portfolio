import './globals.css'

export const metadata = {
  title: 'Shubham Panghal | Frontend Developer',
  description: 'Frontend Developer specializing in React, Next.js, Tailwind CSS & Framer Motion — crafting pixel-perfect, high-performance interfaces.',
  keywords: ['Frontend Developer', 'React Developer', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'UI Engineer'],
  authors: [{ name: 'Shubham Panghal' }],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%25' stop-color='%23818cf8'/><stop offset='100%25' stop-color='%2322d3ee'/></linearGradient></defs><rect width='48' height='48' rx='10' fill='%23040411'/><text x='6' y='33' font-family='Arial' font-size='22' font-weight='800' fill='url(%23g)'>SP</text></svg>",
  },
  openGraph: {
    title: 'Shubham Panghal | Frontend Developer',
    description: 'Frontend Developer specializing in React, Next.js & Framer Motion.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body style={{ background: '#040411', color: '#e2e8f0' }}>
        {/* Skip to main content for keyboard / screen-reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium"
          style={{ background: 'var(--accent)', color: 'black' }}
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
