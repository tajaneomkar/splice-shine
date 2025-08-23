import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Video, 
  Palette, 
  Zap, 
  Award,
  Camera,
  Edit3,
  Music,
  Layers,
  Clock,
  Users
} from "lucide-react";

const skills = [
  { name: "Video Editing", level: 95, icon: Edit3 },
  { name: "Color Grading", level: 90, icon: Palette },
  { name: "Motion Graphics", level: 85, icon: Zap },
  { name: "Audio Mixing", level: 80, icon: Music },
  { name: "Cinematography", level: 88, icon: Camera },
  { name: "Post Production", level: 92, icon: Layers },
];

const tools = [
  "Adobe Premiere Pro",
  "Adobe After Effects", 
  "DaVinci Resolve",
  "Final Cut Pro",
  "Cinema 4D",
  "Adobe Audition",
  "Photoshop",
  "Illustrator"
];

const experience = [
  {
    year: "2019 - Present",
    title: "Senior Video Editor",
    company: "Creative Media Studio",
    description: "Leading video production projects for major brands and creating compelling visual narratives."
  },
  {
    year: "2017 - 2019", 
    title: "Video Editor",
    company: "Digital Agency",
    description: "Edited promotional videos, social media content, and corporate communications."
  },
  {
    year: "2015 - 2017",
    title: "Junior Editor",
    company: "Production House",
    description: "Started career focusing on documentary editing and post-production workflows."
  }
];

const achievements = [
  { icon: Award, text: "50+ Successful Projects" },
  { icon: Users, text: "30+ Happy Clients" },
  { icon: Clock, text: "5+ Years Experience" },
  { icon: Video, text: "1000+ Hours Edited" }
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate video editor with 5+ years of experience crafting compelling visual stories. 
            I specialize in turning raw footage into cinematic masterpieces that engage and inspire audiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Skills & Tools */}
          <div className="space-y-8">
            {/* Skills */}
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Zap className="mr-3 h-6 w-6 text-primary" />
                Skills & Expertise
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className={`skill-card p-4 rounded-xl animate-scale-in delay-${index * 100}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <skill.icon className="h-5 w-5 mr-3 text-primary" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-hero h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="animate-slide-in-left delay-200">
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

            {/* Achievements */}
            <div className="animate-slide-in-left delay-300">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Award className="mr-3 h-6 w-6 text-primary" />
                Achievements
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="skill-card p-4 rounded-xl text-center">
                    <achievement.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="text-sm font-medium">{achievement.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Experience */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Clock className="mr-3 h-6 w-6 text-primary" />
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card key={index} className={`p-6 glass glass-hover animate-slide-up delay-${index * 200}`}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 bg-gradient-hero rounded-full mt-2" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold">{exp.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {exp.year}
                        </Badge>
                      </div>
                      <p className="text-primary font-medium mb-2">{exp.company}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
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
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="hero-button px-8 py-3 rounded-full font-medium"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}