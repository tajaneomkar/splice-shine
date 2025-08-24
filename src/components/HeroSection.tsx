import { Button } from "@/components/ui/button";
import { ArrowDown, Play } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export function HeroSection() {
  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Video Editor</span>
            <br />
            <span className="text-foreground">& Content Producer</span>
          </h1>
        </div>
        
        <div className="animate-slide-up delay-200">
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Bringing stories to life with engaging visuals and impactful editing. 
            I create videos that not only look good but also connect deeply with the audience.
          </p>
        </div>
        
        <div className="animate-slide-up delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="hero-button px-8 py-6 text-lg rounded-full"
            onClick={scrollToPortfolio}
          >
            <Play className="mr-2 h-5 w-5" />
            View Portfolio
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="glass glass-hover px-8 py-6 text-lg rounded-full border-white/20 hover:border-white/30"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </div>
        
        {/* Stats */}
        <div className="animate-slide-up delay-500 mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">50+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">2+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToPortfolio}
          className="h-12 w-12 rounded-full border border-white/20 hover:bg-white/10"
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}