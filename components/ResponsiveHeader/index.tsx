
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconNewSection,
} from "@tabler/icons-react";

const ResponsiveHeader: React.FC = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-pinky" />
      ),
      href: "/",
    },
    {
      title: "Templates",
      icon: (
        <IconNewSection className="h-full w-full text-pinky " />
      ),
      href: "/template",
    },
    {
      title: "DeiLi Invitation",
      icon: (
        <img
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "/",
    },
    {
      title: "Pricing",
      icon: (
        <IconBrandX className="h-full w-full text-pinky" />
      ),
      href: "/pricing",
    },
    {
      title: "Contact",
      icon: (
        <IconBrandGithub className="h-full w-full text-pinky" />
      ),
      href: "#Footer",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full fixed bottom-0 left-0  mb-5 z-50">
      <FloatingDock
        items={links}
      />
    </div>
  );
};

export default ResponsiveHeader;
