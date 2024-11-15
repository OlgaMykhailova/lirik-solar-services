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
import SunspotBgImages from "@/components/shared/backgrounds/SunspotBgImages";
import Container from "@/components/shared/container/Container";

export default function Home() {
  return (
    <div className="pt-[72px]">
      <Hero />
      <Container className="relative">
        <SunspotBgImages />
        <About />
        <Services />
        <Stations />
        <Ess />
        <Benefits />
        <Manufactures />
        <Projects />
        <Stages />
        <Reviews />
        <WriteUs />
        <Contacts />
      </Container>
    </div>
  );
}
