import { Inter } from 'next/font/google'
import '../styles/main.scss'


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: 'mans Ecommerce',
  description: 'generated by next app',
}
export default function Rootlayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}