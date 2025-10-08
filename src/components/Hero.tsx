import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        role="img"
        aria-label="Students collaborating in a study environment"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/50 to-secondary/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-float">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Connecting Students Through Strengths & Weaknesses</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display font-bold text-5xl md:text-7xl mb-6 leading-tight">
            Study Buddy Finder
            <br />
            <span className="gradient-text">Challenge, Collaborate, Conquer</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            A platform where students list subjects they are strong in and subjects they need help with. 
            Find your perfect study partner and excel together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="gradient-primary shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300 text-lg px-8 py-6" 
              onClick={() => window.open('https://forms.gle/3Y6fhf9Ezq7QuqAF6', '_blank', 'noopener,noreferrer')}
              aria-label="Register for Study Buddy Finder"
            >
              Register Now
              <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass-strong hover:glass text-lg px-8 py-6 hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('how-it-works')}
              aria-label="Learn more about how Study Buddy Finder works"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-3xl mx-auto">
            {[{
              icon: Users,
              label: "Active Students",
              value: "10,000+"
            }, {
              icon: BookOpen,
              label: "Study Sessions",
              value: "50,000+"
            }, {
              icon: Sparkles,
              label: "Success Rate",
              value: "95%"
            }].map((stat, index) => (
              <div 
                key={stat.label}
                className="glass-strong rounded-2xl p-6 hover:shadow-glow transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" aria-hidden="true" />
                <div className="text-3xl font-display font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;