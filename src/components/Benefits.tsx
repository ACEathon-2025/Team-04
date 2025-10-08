import { Heart, Users, TrendingUp, Handshake } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Wellness",
    subtitle: "Stress reduction",
    description: "Reduces academic pressure through peer support, shared workloads, and creating a more balanced approach to educational challenges.",
  },
  {
    icon: Users,
    title: "Community",
    subtitle: "Supportive network",
    description: "Builds meaningful connections between students, creating an environment where peers help each other succeed academically and personally.",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    subtitle: "Widespread application",
    description: "Adaptable across educational environments from K-12 schools to universities and digital learning platforms for maximum impact.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    subtitle: "Shared learning",
    description: "Promotes interactive educational experiences where students work together, exchange ideas and develop collective understanding of complex concepts.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 px-6 relative">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Benefits & <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With collaborative learning focus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="glass-strong rounded-2xl p-8 shadow-glass hover:shadow-glow transition-all duration-300 hover:scale-105 group"
            >
              <div className="mb-6">
                <div className="glass rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-bold text-2xl gradient-text mb-1">
                  {benefit.title}
                </h3>
                <p className="text-sm font-semibold text-foreground mb-3">
                  {benefit.subtitle}
                </p>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
