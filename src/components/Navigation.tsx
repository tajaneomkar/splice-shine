import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40">
      <div className="glass rounded-full px-6 py-3 backdrop-blur-xl">
        <ul className="flex items-center space-x-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.href)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all hover:bg-white/10 ${
                  activeSection === item.href.substring(1)
                    ? "bg-gradient-hero text-white shadow-glow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}