import { BiPhoneCall } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { footerLinks } from "@/constants/data";

const Footer = () => {
  return (
    <footer className="py-12 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <div className="space-y-4">
          {footerLinks.map((link, index) => (
            <div
              key={index}
              className="font-semibold text-[13px] leading-[17px] whitespace-nowrap"
            >
              <a
                href={link.url}
                className="text-[#0b0019] dark:text-white hover:text-[#ff7664] dark:hover:text-[#ff7664] transition-colors duration-300"
              >
                {link.text}
              </a>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-start">
          <div className="flex gap-6">
            <a href="https://facebook.com/fetg.uz/">
              <FaFacebook className="text-[2rem] text-[#0b0019] dark:text-white hover:text-[#ff7664] transition-colors duration-300" />
            </a>
            <a href="https://twitter.com/fetgofficial">
              <FaTwitter className="text-[2rem] text-[#0b0019] dark:text-white hover:text-[#ff7664] transition-colors duration-300" />
            </a>
          </div>
        </div>

        <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:justify-between md:space-x-6 lg:space-x-14">
          <div className="space-y-6">
            <BiPhoneCall className="w-6 h-6 text-[#ff7664]" />
            <div className="font-bold text-[#0b0019] dark:text-white text-[13px] leading-[17px] whitespace-nowrap">
              <a href="tel:+998787770870">+998 78 777-08-70</a>
            </div>
          </div>

          <div className="space-y-6">
            <FiMail className="w-6 h-6 text-[#ff7664]" />
            <div className="font-semibold text-[#0b0019] dark:text-white text-[13px] leading-[17px]">
              <a href="mailto:support@fetg.uz">support@fetg.uz</a>
            </div>
            <div className="font-normal text-[#0b0019] dark:text-white text-[13px] leading-[17px]">
              Специалисты службы технической поддержки
              <br />
              готовы помочь вам:
              <br />
              Пн - ПТ с 9:00 до 18:00
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
