import React from "react";
import { IconType } from "react-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MdOutlineCallMade } from "react-icons/md";

interface ServiceDetailsProps {
  title: string;
  description: string;
  tags: string[];
  icon?: IconType | IconType[];
  longDescription: string;
  benefits: string[];
  useCases: string[];
  isOpen: boolean;
  onClose: () => void;
}

const ServiceDialog: React.FC<ServiceDetailsProps> = ({
  title,
  description,
  tags,
  icon,
  longDescription,
  benefits,
  useCases,
  isOpen,
  onClose,
}) => {
  const IconComponent = Array.isArray(icon) ? icon[0] : icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[650px] max-h-[80vh] overflow-y-auto bg-white dark:bg-[#1a123a] dark:text-white border-none shadow-lg rounded-[30px]">
        <DialogHeader className="flex flex-row items-start gap-4">
          {IconComponent && (
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f45e4a]/10 flex-shrink-0">
              {React.createElement(
                IconComponent as React.ComponentType<{ className: string }>,
                {
                  className: "w-6 h-6 text-[#f45e4a]",
                }
              )}
            </div>
          )}
          <div>
            <DialogTitle className="text-xl font-medium text-[#0b0019] dark:text-white relative inline-block text-left">
              {title}
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#f45e4a]"></span>
            </DialogTitle>
            <DialogDescription className="text-[#333] dark:text-gray-300 mt-4 text-sm">
              {description}
            </DialogDescription>
          </div>
        </DialogHeader>

        <div className="mt-4 space-y-4">
          <div>
            <h4 className="font-medium text-base mb-2 text-[#0b0019] dark:text-white">
              Подробнее о сервисе
            </h4>
            <p className="text-[#333] dark:text-gray-300 text-sm leading-relaxed">
              {longDescription}
            </p>
          </div>

          <div>
            <h4 className="font-medium text-base mb-2 text-[#0b0019] dark:text-white">
              Преимущества
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-[#333] dark:text-gray-300">
              {benefits.map((benefit, index) => (
                <li key={index} className="text-sm">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-base mb-2 text-[#0b0019] dark:text-white">
              Применение
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-[#333] dark:text-gray-300">
              {useCases.map((useCase, index) => (
                <li key={index} className="text-sm">
                  {useCase}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-start gap-2 mt-2">
            {tags.map((tag, tagIndex) => (
              <Badge
                key={tagIndex}
                variant="outline"
                className="rounded-[19.17px] border-[#f45e4a] text-[#f45e4a] dark:border-[#f45e4a] dark:text-[#f45e4a] font-normal text-xs py-1 px-2"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <DialogFooter className="mt-4">
          <Button className="cursor-pointer bg-[#f45e4a] dark:text-[#0b0019] shadow-[0px_8px_10px_#ff766430] rounded-[19.17px] font-medium text-sm tracking-[-0.14px] hover:bg-white hover:text-black hover:translate-y-[-3px] transition-all duration-300 relative overflow-hidden group">
            <span className="relative z-10 flex items-center">
              УЗНАТЬ БОЛЬШЕ
              <MdOutlineCallMade className="w-[11.36px] h-[11.36px] ml-2.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-1px]" />
            </span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#f45e4a] to-[#ff9085] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDialog;
