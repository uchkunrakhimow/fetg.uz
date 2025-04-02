import { CheckCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MdOutlineCallMade } from "react-icons/md";
import { benefits } from "@/data/data";
import AnimatedSection from "../AnimatedSection";
import { Badge } from "../ui/badge";

const BenefitsSection = () => {
  return (
    <AnimatedSection delay={0.2}>
      <div className="w-full bg-[#e9deff] dark:bg-[#2a1e45] rounded-[40px] p-12 flex flex-col md:flex-row gap-10">
        <div className="flex flex-col gap-4 max-w-[500px]">
          <h2 className="font-medium text-[#0b0019] dark:text-white text-4xl md:text-[50px] tracking-[-1.00px] leading-[50px]">
            Почему это важно?
          </h2>

          <div className="flex flex-wrap items-start gap-2">
            <Badge
              variant="outline"
              className="rounded-[19.17px] border-[#0b0019] dark:border-white text-[#0b0019] dark:text-white font-normal text-sm py-[5.9px] px-[11.8px]"
            >
              IT структура
            </Badge>
            <Badge
              variant="outline"
              className="rounded-[19.17px] border-[#0b0019] dark:border-white text-[#0b0019] dark:text-white font-normal text-sm py-[5.9px] px-[11.8px]"
            >
              Разработка
            </Badge>
          </div>

          <div className="mt-12 space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircleIcon className="w-6 h-6 text-[#0b0019] dark:text-white flex-shrink-0" />
                <div className="text-[#0b0019] dark:text-white text-sm leading-[22.4px]">
                  <span className="font-semibold">{benefit.title}</span>
                  <br />
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>

          <Button className="cursor-pointer mt-8 w-[205px] h-[49px] bg-[#FF7664] dark:text-[#0b0019] shadow-[0px_11px_14.5px_#ff766430] rounded-[19.17px] font-medium text-sm tracking-[-0.14px] hover:bg-white hover:text-black duration-300">
            НАПИСАТЬ НАМ
            <MdOutlineCallMade className="w-[11.36px] h-[11.36px] ml-2.5" />
          </Button>
        </div>

        <div className="flex-1">
          <div className="w-full h-[547px] rounded-[30px] bg-[url(/bg-layer.png)] bg-cover bg-center" />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default BenefitsSection;
