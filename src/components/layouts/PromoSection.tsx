import AnimatedSection from "../AnimatedSection";
import CustomButton from "../ui/custom-button";

interface PromoSectionProps {
  imageRight?: boolean;
  title: string;
  subtitle: string;
  image: string;
}

const PromoSection: React.FC<PromoSectionProps> = ({
  imageRight = true,
  title,
  subtitle,
  image,
}) => {
  return (
    <AnimatedSection delay={0.2}>
      <div className="w-full rounded-[40px] bg-gradient-to-tr from-[#eee] to-[#f7e9e7] dark:from-[rgba(20,0,45,1)] dark:to-[rgba(55,0,125,1)] mt-12 overflow-hidden group">
        <div
          className={`flex flex-col ${
            imageRight ? "md:flex-row" : "md:flex-row-reverse"
          } items-center p-6 md:p-10`}
        >
          <div className="w-full md:w-1/2 py-10 md:ms-[5rem]">
            <div className="max-w-[500px]">
              <h2 className="font-normal text-3xl md:text-[50px] leading-[60px] dark:text-white relative">
                {title}
                <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#FF7664] transform origin-left transition-transform duration-500 group-hover:scale-x-150"></span>
              </h2>

              <span className="text-base leading-[19.2px] block mt-6 mb-8 dark:text-white">
                {subtitle}
              </span>

              <CustomButton text="УЗНАТЬ БОЛЬШЕЕ" />
            </div>
          </div>

          <div className="w-full md:w-1/2 py-6 md:py-10 flex justify-center relative overflow-hidden">
            <div className="overflow-hidden rounded-2xl transition-shadow duration-500">
              <img
                className="w-auto h-auto max-w-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                alt="Promo"
                src={image}
              />
            </div>

            {/* Декоративные элементы */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FF7664] opacity-10 rounded-full blur-3xl transform scale-0 group-hover:scale-100 transition-transform duration-700"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#FF7664] opacity-10 rounded-full blur-3xl transform scale-0 group-hover:scale-100 transition-transform duration-700"></div>

            {/* Угловые акценты */}
            <div className="absolute top-10 right-10 w-12 h-12 border-t-2 border-r-2 border-[#FF7664] opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-tr-lg"></div>
            <div className="absolute bottom-10 left-10 w-12 h-12 border-b-2 border-l-2 border-[#FF7664] opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-bl-lg"></div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default PromoSection;
