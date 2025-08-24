import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { 
  Award,
  Edit3,
  Users
} from "lucide-react";

const tools = [
  "Adobe Premiere Pro",
  "Adobe After Effects", 
  "Adobe Photoshop",
  "Blender 3D",
  "ChatGPT",
  "Google Veo 3",
  "RunwayML"
];

interface Client {
  name: string;
  logoUrl: string;
}

interface ClientsData {
  clients: Client[];
}

export function AboutSection() {
  const [clientsData, setClientsData] = useState<ClientsData>({ clients: [] });

  useEffect(() => {
    // Load clients data from JSON
    import("@/data/clients.json")
      .then((data) => {
        setClientsData(data.default);
      })
      .catch((error) => {
        console.error("Failed to load clients data:", error);
      });
  }, []);
  return (
    <section id="about" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a Video Editor and Content Producer passionate about crafting stories that truly connect with people. 
            Over the past few years, I've honed my skills in transforming raw footage into polished, cinematic visuals 
            that balance creativity with clarity. My focus is always on storytelling—ensuring every project not only 
            looks professional but also leaves a lasting impression on the audience.
            <br /><br />
            From seamless transitions to thoughtful pacing, I approach each edit with precision and creativity. 
            Whether it's short-form content, brand videos, or storytelling projects, I bring reliability, attention 
            to detail, and a creative eye to the table. If you're looking for someone who values both quality and 
            impact, I'd be glad to collaborate and bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Tools */}
          <div className="space-y-8">
            {/* Tools */}
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Edit3 className="mr-3 h-6 w-6 text-primary" />
                Tools & Software
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Badge key={tool} variant="secondary" className="glass px-3 py-1 text-sm hover:bg-card-hover">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Clients */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Users className="mr-3 h-6 w-6 text-primary" />
              Clients
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {clientsData.clients.map((client, index) => (
                <Card key={index} className={`p-4 glass glass-hover animate-scale-in delay-${index * 100} text-center hover:transform hover:scale-105 transition-all duration-300`}>
                  <div className="aspect-video rounded-lg overflow-hidden mb-3 bg-muted/50 flex items-center justify-center">
                    <img
                      src={client.logoUrl}
                      alt={`${client.name} logo`}
                      className="max-w-full max-h-full object-contain filter brightness-0 invert dark:brightness-100 dark:invert-0 opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <p className="font-medium text-sm">{client.name}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-slide-up delay-500">
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-muted-foreground mb-6">
              Let's bring your vision to life with professional video editing and creative storytelling.
            </p>
            <button 
              onClick={() => window.open('https://calendly.com/tdk09671/30min', '_blank')}
              className="hero-button px-8 py-3 rounded-full font-medium"
            >
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}