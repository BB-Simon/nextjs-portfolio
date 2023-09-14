import { SectionAbout, SectionBanner, SectionContact } from "@components/home";

export default function Home() {
  return (
    <main className="mt-16">
      <SectionBanner />
      <SectionAbout />
      <SectionContact />
    </main>
  )
}
