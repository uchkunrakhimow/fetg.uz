import { CheckCircleIcon } from "lucide-react";
import { benefits } from "@/constants/data";
import AnimatedSection from "../AnimatedSection";
import { Badge } from "../ui/badge";
import { useState } from "react";
import ContactDialog from "@/components/ContactDialog";

const BenefitsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <AnimatedSection delay={0.2}>
      <div className="w-full bg-[#e9deff] dark:bg-[#2a1e45] rounded-[40px] p-12 flex flex-col md:flex-row gap-10 overflow-hidden relative">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#d4c0ff] dark:bg-[#3b2b63] opacity-40 blur-3xl"></div>

        <div className="flex flex-col gap-4 max-w-[500px] z-10">
          <h2 className="font-medium text-[#0b0019] dark:text-white text-4xl md:text-[50px] tracking-[-1.00px] leading-[50px] relative">
            Почему это важно?
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#FF7664]"></span>
          </h2>

          <div className="flex flex-wrap items-start gap-2 mt-4">
            <Badge
              variant="outline"
              className="rounded-[19.17px] border-[#0b0019] dark:border-white text-[#0b0019] dark:text-white font-normal text-sm py-[5.9px] px-[11.8px] hover:bg-[#FF7664] hover:text-white hover:border-[#FF7664] transition-all duration-300"
            >
              IT структура
            </Badge>
            <Badge
              variant="outline"
              className="rounded-[19.17px] border-[#0b0019] dark:border-white text-[#0b0019] dark:text-white font-normal text-sm py-[5.9px] px-[11.8px] hover:bg-[#FF7664] hover:text-white hover:border-[#FF7664] transition-all duration-300"
            >
              Разработка
            </Badge>
          </div>

          <div className="mt-12 space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-white/20 cursor-pointer group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CheckCircleIcon
                  className={`w-6 h-6 flex-shrink-0 transition-colors duration-300 ${
                    hoveredIndex === index
                      ? "text-[#FF7664]"
                      : "text-[#0b0019] dark:text-white"
                  }`}
                />
                <div className="text-[#0b0019] dark:text-white text-sm leading-[22.4px]">
                  <span
                    className={`font-semibold transition-colors duration-300 ${
                      hoveredIndex === index ? "text-[#FF7664]" : ""
                    }`}
                  >
                    {benefit.title}
                  </span>
                  <br />
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>

          {/* Dialog komponentini chaqirish */}
          <ContactDialog />
        </div>

        <div className="flex-1 relative group">
          <div className="w-full h-[547px] rounded-[30px] bg-[url(/bg-layer.png)] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0019]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#0b0019]/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-white text-lg font-medium">
                Передовые IT-решения
              </p>
              <p className="text-white/80 text-sm mt-2">
                Наши специалисты помогут вам выбрать и внедрить оптимальные
                решения для вашего бизнеса
              </p>
            </div>
          </div>

          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#FF7664] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#FF7664] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default BenefitsSection;
