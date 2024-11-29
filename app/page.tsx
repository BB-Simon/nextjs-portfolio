import {
  SectionAbout,
  SectionBanner,
  SectionContact,
  SectionPorjects,
} from "@components/home";

export default function Home() {
  return (
    <main className="mt-16">
      <SectionBanner />
      <SectionPorjects />
      <SectionAbout />
      <SectionContact />
    </main>
  );
}
