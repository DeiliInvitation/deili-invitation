'use client';

import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome } from "@tabler/icons-react";
import { AppWindow, CircleDollarSign, Headset } from "lucide-react";
import { useEffect, useState } from "react";

const ResponsiveHeader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const headerElement = document.getElementById("Header");
    const footerElement = document.getElementById("footer-text");

    const handleScroll = () => {
      if (headerElement && footerElement) {
        const headerRect = headerElement.getBoundingClientRect();
        const footerRect = footerElement.getBoundingClientRect();

        const isHeaderVisible = headerRect.bottom > 0;
        const isFooterVisible = footerRect.top < window.innerHeight;

        setIsVisible(!isHeaderVisible && !isFooterVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-pinky" />,
      href: "/",
    },
    {
      title: "Templates",
      icon: <AppWindow className="h-full w-full text-pinky" />,
      href: "/template",
    },
    {
      title: "DeiLi Invitation",
      icon: (
        <img
          src="/logo.png"
          width={160}
          height={160}
          alt="Deili Logo"
        />
      ),
      href: "/",
    },
    {
      title: "Pricing",
      icon: <CircleDollarSign className="h-full w-full text-pinky" />,
      href: "/pricing",
    },
    {
      title: "Contact",
      icon: <Headset className="h-full w-full text-pinky" />,
      href: "#Footer",
    },
  ];

  return isVisible ? (
    <div className={`flex items-center justify-center w-full fixed bottom-0 left-0 mb-5 z-50 transition-all duration-300`}>
      <FloatingDock items={links} />
    </div>
  ) : null;
};

export default ResponsiveHeader;