import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

const CaptchaButton = () => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <div
      className={cn(
        "h-[76px] bg-[#deceff] dark:bg-[#392b5c] rounded-[20px] overflow-hidden flex items-center px-4 cursor-pointer transition-colors duration-200",
        checked && "bg-[#d0baff] dark:bg-[#443573]" // Слегка меняем цвет при выборе
      )}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-checked={checked}
    >
      <div className="relative w-7 h-7 mr-4 flex items-center justify-center">
        <Checkbox
          className="w-7 h-7 bg-white rounded-[20px] border-2 border-solid border-[#444746] dark:border-white"
          checked={checked}
          // Отключаем клик на самом чекбоксе, чтобы он не вызывался дважды
          onCheckedChange={() => {}}
        />
      </div>
      <span className="font-medium text-[#3b3b3b] dark:text-white text-sm select-none">
        Я не робот
      </span>
    </div>
  );
};

export default CaptchaButton;
