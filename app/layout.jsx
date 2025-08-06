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
  title: "UDAAN - From Grounded Ideas to Sky High Impact | IIC-HITK",
  description:
    "Join UDAAN, the ultimate startup & business model competition by IIC-HITK. Transform your innovative ideas into impactful solutions aligned with UN SDGs. Register now for exciting prizes and mentorship opportunities.",
  keywords: "startup competition, business model, UN SDGs, innovation, entrepreneurship, HITK, IIC, UDAAN",
  authors: [{ name: "IIC-HITK" }],
  openGraph: {
    title: "UDAAN - From Grounded Ideas to Sky High Impact",
    description: "Transform your innovative ideas into impactful solutions. Join the ultimate startup competition.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "UDAAN - Startup Competition by IIC-HITK",
    description: "Transform your innovative ideas into impactful solutions aligned with UN SDGs.",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  )
}
