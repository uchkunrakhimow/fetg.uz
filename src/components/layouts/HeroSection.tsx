import { useState, useEffect, useCallback } from "react";
import { heroSlides } from "@/constants/data";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimating, nextSlide]);

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <div className="w-full rounded-b-[20px] overflow-hidden bg-gradient-to-tr from-[#eee] to-[#f7e9e7] dark:from-[#1E0044] dark:to-[#3f028f]">
      {/* Fixed height container */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-[50px] py-[60px] h-[550px] md:h-[650px]">
        <div className="flex flex-col items-start gap-6 max-w-[518px] md:w-1/2">
          <h1 className="font-bold text-4xl md:text-[64px] leading-tight tracking-[-3.20px] dark:text-white">
            <span className="tracking-[-2.05px]">
              {
                heroSlides[currentSlide].title.split(
                  heroSlides[currentSlide].highlight
                )[0]
              }{" "}
              <br />
            </span>
            <span className="text-[#f45e4a] tracking-[-2.05px]">
              {heroSlides[currentSlide].highlight}
            </span>
            <span className="tracking-[-2.05px]">
              {
                heroSlides[currentSlide].title.split(
                  heroSlides[currentSlide].highlight
                )[1]
              }
            </span>
          </h1>

          <p className="text-base tracking-[-0.64px] leading-[19.2px] dark:text-white mb-6">
            {heroSlides[currentSlide].description}
          </p>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-[9px]">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3.5 h-3.5 rounded-[7px] transition-all duration-300 ${
                    index === currentSlide ? "bg-[#ec3b4e]" : "bg-[#503971]"
                  }`}
                  aria-label={`Перейти к слайду ${index + 1}`}
                  disabled={isAnimating}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Absolute positioning for icon container */}
        <div className="md:w-1/2 h-[350px] flex items-center justify-center relative">
          {heroSlides.map((slide, index) => {
            const SlideIcon = slide.icon;
            return (
              <div
                key={index}
                className={`absolute inset-0 flex items-center justify-center transition-all ${
                  index === currentSlide
                    ? "opacity-100 visible transform translate-x-0"
                    : "opacity-0 invisible transform translate-x-full"
                }`}
                style={{
                  transitionDuration: "800ms",
                }}
              >
                <div className="p-8 rounded-full bg-white shadow-lg">
                  <SlideIcon size={160} color={slide.iconColor} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
