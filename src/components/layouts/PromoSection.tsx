import { MdOutlineCallMade } from "react-icons/md";
import AnimatedSection from "../AnimatedSection";
import { Button } from "../ui/button";

interface PromoSectionProps {
  imageRight?: boolean;
  title: string;
  subtitle: string;
  image: string;
  buttonText?: string;
}

const PromoSection: React.FC<PromoSectionProps> = ({
  imageRight = true,
  title,
  subtitle,
  image,
  buttonText = "УЗНАТЬ БОЛЬШЕЕ",
}) => {
  return (
    <AnimatedSection delay={0.2}>
      <div className="w-full rounded-[40px] bg-gradient-to-tr from-[#eee] to-[#f7e9e7] dark:from-[rgba(20,0,45,1)] dark:to-[rgba(55,0,125,1)] mt-12">
        <div
          className={`flex flex-col ${
            imageRight ? "md:flex-row" : "md:flex-row-reverse"
          } items-center p-10`}
        >
          <div className="w-full md:w-1/2 py-10 ms-[5rem]">
            <div className="max-w-[500px]">
              <h2 className="font-normal text-3xl md:text-[50px] leading-[60px] dark:text-white">
                {title}
                <span className="text-base leading-[19.2px] block mt-6">
                  {subtitle}
                </span>
              </h2>

              <Button className="cursor-pointer mt-8 w-[205px] h-[49px] bg-[#FF7664] dark:text-[#0b0019] shadow-[0px_11px_14.5px_#ff766430] rounded-[19.17px] font-medium text-sm tracking-[-0.14px] hover:bg-white hover:text-black duration-300">
                {buttonText}
                <MdOutlineCallMade className="w-[11.36px] h-[11.36px] ml-2.5" />
              </Button>
            </div>
          </div>

          <div className="w-full md:w-1/2 py-10 flex justify-center">
            <img
              className="w-auto h-auto max-w-full object-cover"
              alt="Promo"
              src={image}
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default PromoSection;
