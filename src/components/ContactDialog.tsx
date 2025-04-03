import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineCallMade } from "react-icons/md";
import { Button } from "@/components/ui/button";
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

const ContactDialog = () => {
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
            Заполните форму ниже, и наши специалисты свяжутся с вами в ближайшее
            время
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
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
  );
};

export default ContactDialog;
