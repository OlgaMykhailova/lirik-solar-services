import About from "@/components/home/about/About";
import Benefits from "@/components/home/benefits/Benefits";
import Contacts from "@/components/home/contacts/Contacts";
import Ess from "@/components/home/ess/Ess";
import Hero from "@/components/home/hero/Hero";
import Manufactures from "@/components/home/manufactures/Manufactures";
import Projects from "@/components/home/projects/Projects";
import Reviews from "@/components/home/reviews/Reviews";
import Services from "@/components/home/services/Services";
import Stages from "@/components/home/stages/Stages";
import Stations from "@/components/home/stations/Stations";
import WriteUs from "@/components/home/writeUs/WriteUs";
import MainButton from "@/components/shared/buttons/MainButton";
import SecondaryButton from "@/components/shared/buttons/SecondaryButton";

export default function Home() {
  return (
    <div>
      <SecondaryButton>Мережі немає</SecondaryButton>
      <MainButton>Почати свій шлях</MainButton>
      <Hero />
      <About />
      <Services />
      <Stations />
      <Ess />
      <Benefits />
      <Manufactures />
      <Stages />
      <Reviews />
      <Projects />
      <WriteUs />
      <Contacts />
    </div>
  );
}
