import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Youtube,
  Instagram,
  Twitter,
  Linkedin,
  Clock,
  CheckCircle
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@videoeditor.com",
    href: "mailto:hello@videoeditor.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Los Angeles, CA",
    href: "#"
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: "#"
  }
];

const socialLinks = [
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" }
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "I'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

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
                    className="flex items-center justify-center w-12 h-12 glass glass-hover rounded-full hover:bg-gradient-hero hover:text-white transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="animate-slide-in-left delay-300">
              <Card className="p-6 glass">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-8 w-8 text-success" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      "Exceptional work quality and lightning-fast turnaround. The final video 
                      exceeded our expectations and helped increase our engagement by 300%."
                    </p>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-xs text-muted-foreground">Marketing Director, TechCorp</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="p-8 glass">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="contact-input"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="contact-input"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="contact-input"
                    placeholder="Video Editing Project"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="contact-input resize-none"
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="hero-button w-full py-3 text-lg"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                By sending this message, you agree to our privacy policy. 
                We'll never share your information with third parties.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}