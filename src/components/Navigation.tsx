import { ArrowRightIcon, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "./ThemeToggle";
import { MdOutlineCallMade } from "react-icons/md";
import { navigationItems } from "@/data/data";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <nav className="py-4 bg-[#282828] dark:bg-[#1E0044] rounded-[20px_20px_0px_0px] px-4 md:px-9 mt-3">
      <div className="flex items-center justify-between relative">
        <img
          className="relative w-32 h-8 md:w-44 md:h-11 object-cover"
          alt="Element"
          src="/logo.png"
        />

        {isMobile && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 focus:outline-none z-50"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        {!isMobile && (
          <div className="flex items-center justify-between flex-1">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-3 md:gap-6 ms-2 md:ms-4">
                {navigationItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuTrigger className="p-2 md:p-3 bg-transparent data-[state=open]:bg-transparent">
                      <span className="font-medium text-white text-xs md:text-sm tracking-[0] leading-[14px] hover:text-[#FF7664] cursor-pointer">
                        {item.label}
                      </span>
                      <MdOutlineCallMade className="w-2 h-2 md:w-3 md:h-3 ms-1 text-white" />
                    </NavigationMenuTrigger>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center justify-end gap-2 md:gap-4">
              <ThemeToggle />

              <Button className="flex items-center gap-1.5 md:gap-2.5 px-2 py-1.5 md:px-3.5 md:py-2.5 rounded-[19.17px] bg-[#FF7664] dark:text-[#0b0019] font-medium text-xs md:text-sm tracking-[-0.14px] hover:bg-white hover:text-black duration-300 shadow-[0px_0px_3.15px_#a22df71a,0px_0px_6.52px_#a22df71a,0px_0px_13px_#a22df71a,0px_0px_25.48px_#a22df71a,0px_0px_46.85px_#a22df71a,0px_0px_19px_9px_#a22df71a] cursor-pointer">
                <a href="https://demo.fetg.uz/login?demo">ОПРОБОВАТЬ</a>
                <ArrowRightIcon className="w-[10px] h-[10px] md:w-[11.36px] md:h-[11.36px]" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#282828] dark:bg-[#1E0044] pt-20 px-4">
          <div className="absolute top-4 right-4 text-white"></div>
          <div className="flex flex-col items-center gap-6">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="font-medium text-white text-lg tracking-[0] leading-[14px] hover:text-[#FF7664] flex items-center gap-2"
              >
                {item.label}
                <MdOutlineCallMade className="w-4 h-4 text-white" />
              </a>
            ))}

            <div className="mt-6 flex flex-col gap-4 items-center">
              <ThemeToggle />

              <Button className="flex items-center gap-2.5 px-5 py-3 rounded-[19.17px] bg-[#FF7664] dark:text-[#0b0019] font-medium text-base tracking-[-0.14px] hover:bg-white hover:text-black duration-300 shadow-[0px_0px_3.15px_#a22df71a,0px_0px_6.52px_#a22df71a,0px_0px_13px_#a22df71a,0px_0px_25.48px_#a22df71a,0px_0px_46.85px_#a22df71a,0px_0px_19px_9px_#a22df71a] cursor-pointer w-full justify-center">
                <a
                  href="https://demo.fetg.uz/login?demo"
                  className="flex items-center gap-2"
                >
                  ОПРОБОВАТЬ
                  <ArrowRightIcon className="w-[11.36px] h-[11.36px]" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
