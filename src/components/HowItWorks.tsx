import { UserPlus, ListChecks, Users2, GraduationCap } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Student Registration",
    description: "Students register on the platform to begin their collaborative learning journey.",
    color: "text-primary",
  },
  {
    icon: ListChecks,
    title: "Subject Selection",
    description: "Students identify their strong and weak subjects to create their learning profile.",
    color: "text-secondary",
  },
  {
    icon: Users2,
    title: "Smart Matching",
    description: "Our algorithm pairs students with compatible study buddies based on complementary skills.",
    color: "text-accent",
  },
  {
    icon: GraduationCap,
    title: "Collaborative Learning",
    description: "Students connect with their matches to learn together and grow their skills.",
    color: "text-primary",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            How It Works in <span className="gradient-text">4 Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple 4-step workflow for students to connect, learn, and grow together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="glass-strong rounded-2xl p-8 shadow-glass hover:shadow-glow transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative mb-6">
                <div className="glass rounded-full w-16 h-16 flex items-center justify-center mx-auto group-hover:shadow-glow transition-all duration-300">
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-glow">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="font-display font-semibold text-xl mb-3 text-center">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground text-center text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
