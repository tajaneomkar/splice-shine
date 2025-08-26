import { Card } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "8830128594",
    href: "tel:+918830128594",
  },
  {
    icon: Mail,
    label: "Email",
    value: "tdk09671@gmail.com",
    href: "mailto:tdk09671@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nashik, Maharashtra - India",
    href: "https://www.google.com/maps/place/Nashik,+Maharashtra,+India",
  },
];

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/ommi_in/",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/omtidke/",
    label: "LinkedIn",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/@ommi.?si=cjc9Yo2PPIHJzQ6u",
    label: "YouTube",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your video project to life? Get in touch and let's
            discuss how we can create something amazing together.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - Get in Touch */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className={`p-4 glass glass-hover animate-scale-in delay-${
                    index * 100
                  }`}
                >
                  <a
                    href={info.href}
                    className="flex items-center space-x-4 text-foreground hover:text-primary transition-colors"
                    target={info.href.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      info.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>
          </div>

          {/* Right side - Follow My Work */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-6">Follow My Work</h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <Card
                  key={index}
                  className={`p-4 glass glass-hover animate-scale-in delay-${
                    index * 100
                  }`}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-foreground hover:text-primary transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
                        <social.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">{social.label}</p>
                      {/* Removed showing URL */}
                    </div>
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
