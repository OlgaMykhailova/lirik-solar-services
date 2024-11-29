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
import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";
import ScrollIndicator from "@/components/shared/pageScrollIndicator/ScrollIndicator";
import DelayedPromotionPopUp from "@/components/shared/pop-ups/DelayedPromotionPopUp";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="pt-[72px]">
          <Hero />
          <div className="relative">
            <ScrollIndicator className="top-[174px] tab:top-[74px] laptop:top-[96px] h-[calc(100%-168px)] tab:h-[calc(100%-64px)] laptop:h-[calc(100%-88px)]" />
            <div className="relative">
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
            </div>
          </div>
          <DelayedPromotionPopUp />
        </div>
      </main>
      <Footer />
    </>
  );
}
