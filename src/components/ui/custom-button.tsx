import React from "react";
import { MdOutlineCallMade } from "react-icons/md";
import { Button } from "@/components/ui/button";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function CustomButton({ text }: CustomButtonProps) {
  return (
    <Button className="cursor-pointer mt-8 w-[205px] h-[49px] bg-[#FF7664] dark:text-[#0b0019] shadow-[0px_11px_14.5px_#ff766430] rounded-[19.17px] font-medium text-sm tracking-[-0.14px] hover:bg-white hover:text-black hover:translate-y-[-3px] transition-all duration-300 relative overflow-hidden group">
      <span className="relative z-10 flex items-center">
        {text}
        <MdOutlineCallMade className="w-[11.36px] h-[11.36px] ml-2.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-1px]" />
      </span>
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#FF7664] to-[#ff9085] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
    </Button>
  );
}
