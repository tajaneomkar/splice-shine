import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground text-sm">
              © 2024 Video Editor Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
            <span>and lots of creativity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}