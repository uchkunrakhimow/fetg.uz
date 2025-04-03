import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { IconType } from "react-icons";
import ServiceDialog from "@/components/ServiceDialog";

type ServiceTag = string;

interface ServiceProps {
  title: string;
  description: string;
  tags: ServiceTag[];
  icon?: IconType | IconType[];
  longDescription: string;
  benefits: string[];
  useCases: string[];
}

interface ServiceCardProps {
  service: ServiceProps;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Card
        key={index}
        className="rounded-[40px] overflow-hidden bg-gradient-to-tr from-[#eee] to-[#f7e9e7] dark:from-[rgba(20,0,45,1)] dark:to-[rgba(55,0,125,1)] transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] cursor-pointer group"
        onClick={() => setIsDialogOpen(true)}
      >
        <CardContent className="p-12 relative">
          <div className="pr-28">
            <h3 className="font-normal dark:text-white text-2xl md:text-[32px] tracking-[-0.32px] leading-normal mb-6 transition-colors duration-300 group-hover:text-[#f45e4a]">
              {service.title}
            </h3>

            <p className="font-normal dark:text-white text-sm leading-[22.4px] mb-8 max-w-[460px]">
              {service.description}
            </p>

            <div className="flex flex-wrap items-start gap-2">
              {service.tags.map((tag, tagIndex) => (
                <Badge
                  key={tagIndex}
                  variant="outline"
                  className="rounded-[19.17px] dark:border-white dark:text-white font-normal text-sm py-[5.9px] px-[11.8px] transition-all duration-300 group-hover:border-[#f45e4a] group-hover:bg-[rgba(244,94,74,0.05)]"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {service.icon && (
            <div className="absolute top-9 right-12 w-[101px] h-[100px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 overflow-visible">
              <div className="absolute w-0 h-0 bg-[#f45e4a] opacity-0 rounded-full group-hover:w-[120px] group-hover:h-[120px] group-hover:opacity-5 transition-all duration-500"></div>
              {Array.isArray(service.icon) ? (
                <div className="relative w-[101px] h-[100px] flex items-center justify-center">
                  {service.icon.map((IconComponent, i) => {
                    const offsetX = i % 2 === 0 ? -8 : 8;
                    const offsetY = i < 2 ? -8 : 8;
                    return (
                      <IconComponent
                        key={i}
                        className={`absolute w-10 h-10 dark:text-white transition-all duration-300 group-hover:text-[#f45e4a] group-hover:transform`}
                        style={{
                          transform: `translate(${offsetX}px, ${offsetY}px)`,
                        }}
                      />
                    );
                  })}
                </div>
              ) : (
                React.createElement(
                  service.icon as React.ComponentType<{ className: string }>,
                  {
                    className:
                      "w-10 h-10 dark:text-white transition-colors duration-300 group-hover:text-[#f45e4a]",
                  }
                )
              )}
            </div>
          )}

          <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f45e4a] group-hover:w-full transition-all duration-500"></div>
        </CardContent>
      </Card>

      <ServiceDialog
        title={service.title}
        description={service.description}
        tags={service.tags}
        icon={service.icon}
        longDescription={service.longDescription}
        benefits={service.benefits}
        useCases={service.useCases}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
};

export default ServiceCard;
