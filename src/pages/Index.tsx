import { Navbar } from "@/components/icgc/Navbar";
import { Hero } from "@/components/icgc/Hero";
import { SuitableMarquee } from "@/components/icgc/SuitableMarquee";
import { Features } from "@/components/icgc/Features";
import { Tools } from "@/components/icgc/Tools";
import { Steps } from "@/components/icgc/Steps";
import { Stories } from "@/components/icgc/Stories";
import { BookingForm } from "@/components/icgc/BookingForm";
import { FAQ } from "@/components/icgc/FAQ";
import { CTABand } from "@/components/icgc/CTABand";
import { Footer } from "@/components/icgc/Footer";
import { SocialProofToast } from "@/components/icgc/SocialProofToast";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <SuitableMarquee />
      <section id="what">
        <Features />
      </section>
      <Tools />
      <Steps />
      <Stories />
      <BookingForm />
      <FAQ />
      <CTABand />
      <Footer />
      <SocialProofToast />
    </main>
  );
};

export default Index;
