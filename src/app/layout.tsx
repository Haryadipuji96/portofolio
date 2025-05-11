// src/app/layout.tsx

import './globals.css'
import type { ReactNode } from 'react'
import 'animate.css';


export const metadata = {
  title: 'My Portfolio',
  description: 'Portofolio pribadi',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        
        <main>{children}</main>
      </body>
    </html>
  )
}
