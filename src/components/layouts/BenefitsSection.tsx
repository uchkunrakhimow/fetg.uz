import { CheckCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MdOutlineCallMade } from "react-icons/md";
import { benefits } from "@/data/data";
import AnimatedSection from "../AnimatedSection";
import { Badge } from "../ui/badge";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const BenefitsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = () => {
    setIsOpen(false);
  };

  return (
    <AnimatedSection delay={0.2}>
      <div className="w-full bg-[#e9deff] dark:bg-[#2a1e45] rounded-[40px] p-12 flex flex-col md:flex-row gap-10 overflow-hidden relative">
        {/* Декоративный элемент */}
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

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="cursor-pointer mt-8 w-[205px] h-[49px] bg-[#FF7664] dark:text-[#0b0019] shadow-[0px_11px_14.5px_#ff766430] rounded-[19.17px] font-medium text-sm tracking-[-0.14px] hover:bg-white hover:text-black hover:translate-y-[-3px] transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10 flex items-center">
                  НАПИСАТЬ НАМ
                  <MdOutlineCallMade className="w-[11.36px] h-[11.36px] ml-2.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-1px]" />
                </span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#FF7664] to-[#ff9085] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] bg-white dark:bg-[#1a123a] dark:text-white border-none shadow-lg rounded-[20px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-medium text-[#0b0019] dark:text-white relative inline-block">
                  Напишите нам
                  <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#FF7664]"></span>
                </DialogTitle>
                <DialogDescription className="text-[#333] dark:text-gray-300 mt-4">
                  Заполните форму ниже, и наши специалисты свяжутся с вами в
                  ближайшее время
                </DialogDescription>
              </DialogHeader>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 mt-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-[#0b0019] dark:text-white"
                    >
                      Имя <span className="text-[#FF7664]">*</span>
                    </label>
                    <Input
                      id="name"
                      placeholder="Введите ваше имя"
                      className="rounded-lg border-gray-300 dark:border-gray-700 dark:bg-[#2a1e45]"
                      {...form.register("name", { required: true })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-[#0b0019] dark:text-white"
                    >
                      Email <span className="text-[#FF7664]">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@company.com"
                      className="rounded-lg border-gray-300 dark:border-gray-700 dark:bg-[#2a1e45]"
                      {...form.register("email", { required: true })}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-[#0b0019] dark:text-white"
                    >
                      Телефон
                    </label>
                    <Input
                      id="phone"
                      placeholder="+998 (__) ___-__-__"
                      className="rounded-lg border-gray-300 dark:border-gray-700 dark:bg-[#2a1e45]"
                      {...form.register("phone")}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="text-sm font-medium text-[#0b0019] dark:text-white"
                    >
                      Компания
                    </label>
                    <Input
                      id="company"
                      placeholder="Название компании"
                      className="rounded-lg border-gray-300 dark:border-gray-700 dark:bg-[#2a1e45]"
                      {...form.register("company")}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-[#0b0019] dark:text-white"
                  >
                    Сообщение <span className="text-[#FF7664]">*</span>
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Опишите ваш запрос или вопрос"
                    className="rounded-lg min-h-[120px] border-gray-300 dark:border-gray-700 dark:bg-[#2a1e45]"
                    {...form.register("message", { required: true })}
                  />
                </div>
                <DialogFooter className="flex-col sm:flex-row gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsOpen(false)}
                    className="w-full sm:w-auto rounded-[19.17px] border-[#0b0019] dark:border-white text-[#0b0019] dark:text-white hover:bg-[#0b0019]/10"
                  >
                    Отмена
                  </Button>
                  <Button
                    type="submit"
                    className="w-full sm:w-auto bg-[#FF7664] text-white dark:text-[#0b0019] rounded-[19.17px] hover:bg-[#ff9085] transition-colors duration-300"
                  >
                    Отправить
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
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
