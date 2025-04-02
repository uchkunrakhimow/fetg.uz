const HeroSection = () => {
  return (
    <div className="w-full rounded-b-[20px] overflow-hidden bg-gradient-to-tr from-[#eee] to-[#f7e9e7] dark:from-[#1E0044] dark:to-[#3f028f]">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-28 px-6 md:px-[50px] py-[60px]">
        <div className="flex flex-col items-start gap-6 max-w-[518px]">
          <h1 className="font-bold text-4xl md:text-[64px] leading-tight tracking-[-3.20px] dark:text-white">
            <span className="tracking-[-2.05px]">
              Современные <br />
            </span>
            <span className="text-[#f45e4a] tracking-[-2.05px]">
              IT-решения
            </span>
            <span className="tracking-[-2.05px]"> для вашего бизнеса</span>
          </h1>

          <div className="flex flex-col items-start gap-16">
            <p className="text-base tracking-[-0.64px] leading-[19.2px] dark:text-white">
              Хотите, чтобы ваш сайт, приложение или онлайн-сервис работали
              быстро, надежно и без сбоев? Мы занимаемся тем, что делаем
              IT-инфраструктуру автоматизированной, безопасной и удобной в
              управлении.
            </p>

            <div className="flex items-center gap-[9px]">
              {[1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className={`w-3.5 h-3.5 rounded-[7px] ${
                    index === 3 ? "bg-[#ec3b4e]" : "bg-[#503971]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:w-[572px]">
          <div className="w-full md:w-[572px] h-[426px] bg-[url(/bg-slider.png)] bg-cover bg-center" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
