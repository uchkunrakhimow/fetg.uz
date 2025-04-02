import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { IconType } from "react-icons";

// Define types for service tags
type ServiceTag = string;

// Define the service interface
interface ServiceProps {
  title: string;
  description: string;
  tags: ServiceTag[];
  icon?: IconType | IconType[]; // Icon can be a single component or array of components
}

// Props for the ServiceCard component
interface ServiceCardProps {
  service: ServiceProps;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <Card
      key={index}
      className="rounded-[40px] overflow-hidden bg-gradient-to-tr from-[#eee] to-[#f7e9e7] dark:from-[rgba(20,0,45,1)] dark:to-[rgba(55,0,125,1)]"
    >
      <CardContent className="p-12 relative">
        <div className="pr-28">
          <h3 className="font-normal dark:text-white text-2xl md:text-[32px] tracking-[-0.32px] leading-normal mb-6">
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
                className="rounded-[19.17px] dark:border-white dark:text-white font-normal text-sm py-[5.9px] px-[11.8px]"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {service.icon && (
          <div className="absolute top-9 right-12 w-[101px] h-[100px] flex items-center justify-center">
            {Array.isArray(service.icon) ? (
              <div className="relative w-[101px] h-[100px] flex items-center justify-center">
                {service.icon.map((IconComponent, i) => (
                  <IconComponent
                    key={i}
                    className="absolute w-10 h-10 dark:text-white"
                  />
                ))}
              </div>
            ) : (
              /* Need to use type assertion because we can't directly pass a component type as a prop */
              React.createElement(
                service.icon as React.ComponentType<{ className: string }>,
                {
                  className: "w-10 h-10 dark:text-white",
                }
              )
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
