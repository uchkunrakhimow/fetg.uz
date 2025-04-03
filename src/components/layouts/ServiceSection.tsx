import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import { serviceCards } from "@/constants/data";

const ServicesSection = () => {
  return (
    <AnimatedSection delay={0.2}>
      <div className="w-full mt-12 mb-16">
        <h2 className="font-bold text-4xl md:text-[64px] tracking-[-3.20px] leading-[64px] mb-16 text-[#0B0019] dark:text-white">
          Чем мы занимаемся?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceCards.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ServicesSection;
