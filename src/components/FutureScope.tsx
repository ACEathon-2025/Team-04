import { Sparkles, Users, BookOpen, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Sparkles,
    title: "AI-powered buddy suggestions",
    description: "Intelligent matching algorithms for optimal study partnerships",
  },
  {
    icon: Users,
    title: "Group study sessions",
    description: "Match 3-5 students for collaborative learning experiences",
  },
  {
    icon: BookOpen,
    title: "Recommended study materials",
    description: "Curated resources tailored to your learning needs",
  },
  {
    icon: Layers,
    title: "LMS Integration",
    description: "Seamless connection with Moodle and Google Classroom",
  },
];

const FutureScope = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="glass-strong rounded-3xl p-12 shadow-glass relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
                Future <span className="gradient-text">Scope</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Exciting features coming soon to enhance your learning experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {features.map((feature) => (
                <div 
                  key={feature.title}
                  className="glass rounded-xl p-6 hover:shadow-glass transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="glass rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="font-display font-bold text-2xl md:text-3xl gradient-text mb-8">
                Together, We Learn Better.
              </p>
              
              <Button 
                size="lg"
                className="gradient-primary shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
                onClick={() => window.open('https://forms.gle/3Y6fhf9Ezq7QuqAF6', '_blank', 'noopener,noreferrer')}
                aria-label="Register for Study Buddy Finder to get started"
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureScope;
