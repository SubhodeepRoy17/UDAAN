import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata = {
  title: "UDAAN2.0: A National Level Prototype/Business Model Competition | IIC-HITK",
  description:
    "Join UDAAN2.0: A National Level Prototype/Business Model Competition by IIC-HITK. Transform your innovative ideas into impactful solutions aligned with UN SDGs. Register now for exciting prizes and mentorship opportunities.",
  keywords: "startup competition, business model, SDGs, innovation, entrepreneurship, HITK, IIC, UDAAN2.0",
  authors: [{ name: "IIC-HITK" }],
  openGraph: {
    title: "UDAAN2.0: A National Level Prototype/Business Model Competition",
    description: "Transform your innovative ideas into impactful solutions. Join the national-level prototype and business model competition.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "UDAAN2.0 - Prototype/Business Model Competition by IIC-HITK",
    description: "Transform your innovative ideas into impactful solutions aligned with SDGs.",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  )
}
