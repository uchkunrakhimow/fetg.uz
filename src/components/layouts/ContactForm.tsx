import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CaptchaButton from "@/components/CapchaButton";
import AnimatedSection from "../AnimatedSection";
import { Button } from "../ui/button";
import { MdOutlineCallMade } from "react-icons/md";

const ContactForm = () => {
  return (
    <AnimatedSection delay={0.2}>
      <div className="w-full bg-[#e9deff] dark:bg-[#2a1e45] rounded-[40px] p-12 mt-12">
        <div className="max-w-[1029px] mx-auto">
          <h2 className="font-normal text-fetguzblack dark:text-white text-2xl md:text-[32px] leading-10 mb-10 max-w-[759px]">
            У вас еще нет IP-телефонии,
            <br />
            чтобы воспользоваться системой
            <br />
            статистики FETG.uz?
          </h2>

          <div className="flex flex-col md:flex-row gap-16">
            <div className="w-full md:w-1/2 space-y-4">
              <Input
                className="h-[38px] rounded-[25px] border-[#959899] dark:border-[#6d6d6d] font-medium text-[#3b3b3b] dark:text-white text-xs"
                placeholder="Вас зовут"
              />
              <Input
                className="h-[38px] rounded-[25px] border-[#959899] dark:border-[#6d6d6d] font-medium text-[#3b3b3b] dark:text-white text-xs"
                placeholder="Ваш e-mail"
              />
              <Input
                className="h-[38px] rounded-[25px] border-[#959899] dark:border-[#6d6d6d] font-medium text-[#3b3b3b] dark:text-white text-xs"
                placeholder="Ваш телефон"
              />
              <Textarea
                className="h-36 rounded-[20px] border-[#959899] dark:border-[#6d6d6d] font-medium text-[#3b3b3b] dark:text-white text-xs"
                placeholder="Ваш вопрос"
              />

              <CaptchaButton />
            </div>

            <div className="w-full md:w-1/2">
              <img
                className="w-[273px] h-[227px] object-cover mb-6"
                alt="Object"
                src="/phone.png"
              />
              <p className="font-normal text-fetguzcape-cod dark:text-gray-300 text-[15px] leading-[17px] mb-6 max-w-[482px]">
                Если на данный момент у вас еще нет IP-телефонии, наша команда с
                радостью поможет вам с ее установкой и настройкой.
                <br />
                <br />
                Укажите в письме количество пользователей, необходимый вам
                функционал. Не упустите свой шанс, после установки и настройки
                IP-АТС вы получите два месяца системы статистики FETG.uz.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Button className="cursor-pointer mt-8 w-[205px] h-[49px] bg-[#FF7664] dark:text-[#0b0019] shadow-[0px_11px_14.5px_#ff766430] rounded-[19.17px] font-medium text-sm tracking-[-0.14px] hover:bg-white hover:text-black duration-300">
              ОТПРАВИТЬ
              <MdOutlineCallMade className="w-[11.36px] h-[11.36px] ml-2.5" />
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactForm;
