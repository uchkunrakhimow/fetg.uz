import { memo } from "react";
import BenefitsSection from "@/components/layouts/BenefitsSection";
import ContactForm from "@/components/layouts/ContactForm";
import Copyright from "@/components/layouts/Copyright";
import Footer from "@/components/layouts/Footer";
import HeroSection from "@/components/layouts/HeroSection";
import PromoSection from "@/components/layouts/PromoSection";
import ServicesSection from "@/components/layouts/ServiceSection";

const MemoizedHeroSection = memo(HeroSection);
const MemoizedServicesSection = memo(ServicesSection);
const MemoizedBenefitsSection = memo(BenefitsSection);
const MemoizedContactForm = memo(ContactForm);
const MemoizedFooter = memo(Footer);
const MemoizedCopyright = memo(Copyright);

export const Home = () => {
  return (
    <section className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <MemoizedHeroSection />

      {/* Services Section */}
      <MemoizedServicesSection />

      {/* Benefits Section */}
      <MemoizedBenefitsSection />

      {/* First Promo Section */}
      <PromoSection
        imageRight={true}
        title="Если у вас есть сайт, мобильное приложение или онлайн-сервис,"
        subtitle="мы поможем сделать его быстрее, стабильнее и безопаснее."
        image="/tablet.png"
      />

      {/* Second Promo Section */}
      <PromoSection
        imageRight={false}
        title="Хотите узнать, как DevOps может помочь вашему бизнесу?"
        subtitle="Свяжитесь с нами, и мы подберем для вас лучшее решение!&#34;"
        image="/rocket.png"
      />

      {/* Contact Form Section */}
      <MemoizedContactForm />

      {/* Footer */}
      <MemoizedFooter />

      <MemoizedCopyright />
    </section>
  );
};

export default memo(Home);
