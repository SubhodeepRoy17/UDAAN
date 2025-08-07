import Hero from "@/components/hero"
import Registration from "@/components/registration"
import Prizes from "@/components/prizes"
import Schedule from "@/components/schedule"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import Committee from "@/components/committee"
import Header from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <Header />
      <Hero />
      <Registration />
      <Prizes />
      <Schedule />
      <Committee />
      <FAQ />
      <Footer />
    </main>
  )
}
