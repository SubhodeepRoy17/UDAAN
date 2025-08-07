import Hero from "@/components/hero"
import HITK from "@/components/hitk"
import Themes from "@/components/themes"
import Eligibility from "@/components/eligibility"
import Guidelines from "@/components/guidelines"
import About from "@/components/about"
import Registration from "@/components/registration"
// import Jury from "@/components/jury"
import Prizes from "@/components/prizes"
import Schedule from "@/components/schedule"
import Committee from "@/components/committee"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <Header />
      <Hero />
      <About />
      <HITK/>
      <Themes />
      <Eligibility />
      <Guidelines />
      <Registration />
      <Prizes />
      <Schedule />
      <Committee />
      <FAQ />
      <Footer />
    </main>
  )
}
