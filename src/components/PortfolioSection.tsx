import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Play, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Corporate Brand Film",
    description: "A cinematic brand story showcasing innovation and creativity through dynamic visuals and storytelling.",
    category: "Commercial",
    tags: ["Branding", "Cinematic", "Corporate"],
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=450&fit=crop&auto=format",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    duration: "2:30",
    client: "Tech Corp"
  },
  {
    id: 2,
    title: "Music Video Production",
    description: "High-energy music video with creative transitions, color grading, and rhythmic editing.",
    category: "Music Video",
    tags: ["Music", "Creative", "Color Grading"],
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=450&fit=crop&auto=format",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    duration: "3:45",
    client: "Indie Artist"
  },
  {
    id: 3,
    title: "Documentary Short",
    description: "Compelling documentary storytelling with interview cuts, b-roll integration, and emotional pacing.",
    category: "Documentary",
    tags: ["Documentary", "Storytelling", "Interview"],
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=450&fit=crop&auto=format",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    duration: "15:20",
    client: "Non-profit Org"
  },
  {
    id: 4,
    title: "Product Showcase",
    description: "Sleek product demonstration with macro photography, smooth transitions, and modern aesthetics.",
    category: "Commercial",
    tags: ["Product", "Macro", "Modern"],
    thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=450&fit=crop&auto=format",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    duration: "1:45",
    client: "Startup Co"
  },
  {
    id: 5,
    title: "Event Highlights",
    description: "Dynamic event coverage with multiple camera angles, live audio sync, and fast-paced editing.",
    category: "Event",
    tags: ["Event", "Multi-cam", "Live"],
    thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=450&fit=crop&auto=format",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    duration: "5:12",
    client: "Event Agency"
  },
  {
    id: 6,
    title: "Social Media Campaign",
    description: "Series of short-form content optimized for social platforms with engaging hooks and clear CTAs.",
    category: "Social Media",
    tags: ["Social", "Short-form", "Viral"],
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop&auto=format",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    duration: "0:30",
    client: "Brand Agency"
  }
];

const categories = ["All", "Commercial", "Music Video", "Documentary", "Event", "Social Media"];

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">My Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of creative video projects spanning commercials, music videos, 
            documentaries, and social media content.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full ${
                selectedCategory === category 
                  ? "hero-button" 
                  : "glass glass-hover border-white/20"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`video-card rounded-2xl p-6 cursor-pointer animate-scale-in delay-${index * 100}`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-video">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Play className="h-12 w-12 text-white" />
                </div>
                <div className="absolute top-3 right-3 bg-black/60 text-white text-sm px-2 py-1 rounded">
                  {project.duration}
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="glass">
                    {project.category}
                  </Badge>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl">
          {selectedProject && (
            <>
              <DialogTitle className="text-2xl font-bold mb-2">
                {selectedProject.title}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground mb-4">
                {selectedProject.description}
              </DialogDescription>
              
              <div className="aspect-video mb-4 rounded-xl overflow-hidden">
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster={selectedProject.thumbnail}
                >
                  <source src={selectedProject.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Client: {selectedProject.client}</span>
                <span>Duration: {selectedProject.duration}</span>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {selectedProject.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}