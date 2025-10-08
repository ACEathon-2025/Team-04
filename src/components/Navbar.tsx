import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass shadow-glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Study Buddy Finder" className="h-10 w-10" />
            <span className="font-display font-bold text-xl gradient-text">
              Study Buddy Finder
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button 
              variant="default"
              className="gradient-primary shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://forms.gle/3Y6fhf9Ezq7QuqAF6', '_blank')}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
