import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Play, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  thumbnail: string;
  videoUrl: string;
  duration: string;
  client: string;
}

interface PortfolioData {
  categories: string[];
  projects: Project[];
}

export function PortfolioSection() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>({ categories: [], projects: [] });
  const [selectedCategory, setSelectedCategory] = useState("Long Form");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    // Load portfolio data from JSON
    import("@/data/portfolio.json")
      .then((data) => {
        setPortfolioData(data.default);
        // Set default category to first available category
        if (data.default.categories.length > 0) {
          setSelectedCategory(data.default.categories[0]);
        }
      })
      .catch((error) => {
        console.error("Failed to load portfolio data:", error);
      });
  }, []);

  const categories = portfolioData.categories;
  const filteredProjects = portfolioData.projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">My Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A portfolio of diverse video projects, including commercials, long-form and short-form content, 
            real estate videos, motion graphics, and social media campaigns.
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