import { Card } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin,
  Instagram,
  Linkedin
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "8830128594",
    href: "tel:+918830128594"
  },
  {
    icon: Mail,
    label: "Email",
    value: "tdk09671@gmail.com",
    href: "mailto:tdk09671@gmail.com"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nashik, Maharashtra - India",
    href: "#"
  }
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/ommi_in/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/omtidke/", label: "LinkedIn" }
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
            Ready to bring your video project to life? Get in touch and let's discuss 
            how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className={`p-4 glass glass-hover animate-scale-in delay-${index * 100}`}>
                    <a 
                      href={info.href}
                      className="flex items-center space-x-4 text-foreground hover:text-primary transition-colors"
                      target={info.href.startsWith('http') ? '_blank' : '_self'}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
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

            {/* Social Links */}
            <div className="animate-slide-in-left delay-200">
              <h3 className="text-xl font-bold mb-4">Follow My Work</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 glass glass-hover rounded-full hover:bg-gradient-hero hover:text-white transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Book a Call CTA */}
          <div className="animate-slide-in-right flex items-center justify-center">
            <Card className="p-12 glass text-center max-w-md">
              <h3 className="text-3xl font-bold mb-6">Ready to Work Together?</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Let's bring your vision to life with professional video editing and creative storytelling.
              </p>
              <button 
                onClick={() => window.open('https://calendly.com/tdk09671/30min', '_blank')}
                className="hero-button px-8 py-4 rounded-full font-medium text-lg w-full"
              >
                Book a Call
              </button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}