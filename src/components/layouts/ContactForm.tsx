import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CaptchaButton from "@/components/CapchaButton";
import AnimatedSection from "../AnimatedSection";
import CustomButton from "../ui/custom-button";
import { useState } from "react";
import { FaPhoneAlt, FaHeadset, FaServer } from "react-icons/fa";
import { MdContactPhone, MdOutlineSupportAgent } from "react-icons/md";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatedSection delay={0.2}>
      <div className="w-full bg-[#e9deff] dark:bg-[#2a1e45] rounded-[40px] p-6 md:p-12 mt-12 overflow-hidden relative">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#d4c0ff] dark:bg-[#3b2b63] opacity-40 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#d4c0ff] dark:bg-[#3b2b63] opacity-30 blur-3xl"></div>

        <div className="max-w-[1029px] mx-auto relative z-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-normal text-fetguzblack dark:text-white text-2xl md:text-[32px] leading-10 max-w-[759px] relative">
              У вас еще нет IP-телефонии,
              <br />
              чтобы воспользоваться системой
              <br />
              статистики FETG.uz?
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#FF7664]"></span>
            </h2>

            <div className="hidden md:flex h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm items-center justify-center border border-white/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/2 space-y-5 relative">
              <div className="relative group">
                <Input
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="h-[38px] rounded-[25px] border-[#959899] dark:border-[#6d6d6d] font-medium text-[#3b3b3b] dark:text-white text-xs pl-4 pr-4 transition-all duration-300 focus:border-[#FF7664] focus:ring-1 focus:ring-[#FF7664] hover:border-[#FF7664]"
                  placeholder="Вас зовут"
                />
                <div className="absolute bottom-0 left-0 h-0.5 w-0  transition-all duration-500 group-hover:w-full"></div>
              </div>

              <div className="relative group">
                <Input
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="h-[38px] rounded-[25px] border-[#959899] dark:border-[#6d6d6d] font-medium text-[#3b3b3b] dark:text-white text-xs pl-4 pr-4 transition-all duration-300 focus:border-[#FF7664] focus:ring-1 focus:ring-[#FF7664] hover:border-[#FF7664]"
                  placeholder="Ваш e-mail"
                />
                <div className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full"></div>
              </div>

              <div className="relative group">
                <Input
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  className="h-[38px] rounded-[25px] border-[#959899] dark:border-[#6d6d6d] font-medium text-[#3b3b3b] dark:text-white text-xs pl-4 pr-4 transition-all duration-300 focus:border-[#FF7664] focus:ring-1 focus:ring-[#FF7664] hover:border-[#FF7664]"
                  placeholder="Ваш телефон"
                />
                <div className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full"></div>
              </div>

              <div className="relative group">
                <Textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  className="h-36 rounded-[20px] border-[#959899] dark:border-[#6d6d6d] font-medium text-[#3b3b3b] dark:text-white text-xs pl-4 pr-4 transition-all duration-300 focus:border-[#FF7664] focus:ring-1 focus:ring-[#FF7664] hover:border-[#FF7664]"
                  placeholder="Ваш вопрос"
                />
                <div className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full"></div>
              </div>

              <div className="pt-2">
                <CaptchaButton />
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
              <div className="relative group w-[273px] h-[227px] overflow-hidden rounded-[20px] mb-6 shadow-lg flex items-center justify-center bg-gradient-to-br from-[#3b2b63] to-[#503971]">
                {/* Основная большая иконка телефона */}
                <MdContactPhone className="text-[#FF7664] w-32 h-32 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" />

                {/* Декоративные маленькие иконки */}
                <FaServer className="absolute top-8 left-8 text-white opacity-20 w-10 h-10" />
                <FaHeadset className="absolute bottom-12 left-10 text-white opacity-20 w-8 h-8" />
                <MdOutlineSupportAgent className="absolute top-10 right-8 text-white opacity-20 w-10 h-10" />
                <FaPhoneAlt className="absolute bottom-10 right-10 text-white opacity-20 w-8 h-8" />

                {/* Анимированные круги */}
                <div className="absolute w-full h-full">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-2 border-white/10 animate-pulse"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border border-white/5"></div>
                </div>

                {/* Градиентное наложение при наведении */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0019]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-5 border border-white/20 dark:border-white/5">
                <p className="font-normal text-fetguzcape-cod dark:text-gray-300 text-[15px] leading-[19px] max-w-[482px]">
                  Если на данный момент у вас еще нет IP-телефонии, наша команда
                  с радостью поможет вам с ее установкой и настройкой.
                  <br />
                  <br />
                  <span className="text-[#FF7664] font-medium">
                    Укажите в письме:
                  </span>
                </p>
                <ul className="list-disc pl-5 mt-2 text-fetguzcape-cod dark:text-gray-300 text-[15px]">
                  <li className="mb-1">количество пользователей</li>
                  <li>необходимый вам функционал</li>
                </ul>
                <p className="font-medium text-fetguzcape-cod dark:text-white text-[15px] mt-4 pb-1 border-b border-[#FF7664]/30">
                  Не упустите свой шанс, после установки и настройки IP-АТС вы
                  получите <span className="text-[#FF7664]">два месяца</span>{" "}
                  системы статистики FETG.uz бесплатно!
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <CustomButton text="ОТПРАВИТЬ" />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactForm;
