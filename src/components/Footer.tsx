import logo from "@/assets/logo.png";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
const Footer = () => {
  return <footer className="glass-strong border-t border-glass-border mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Study Buddy Finder" className="h-10 w-10" />
              <span className="font-display font-bold text-xl gradient-text">
                Study Buddy Finder
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-4 max-w-md">
              Connecting students through strengths & weaknesses. Challenge, Collaborate, Conquer together.
            </p>
            <div className="flex gap-4">
              {[{
                icon: Twitter,
                href: "#",
                label: "Twitter"
              }, {
                icon: Linkedin,
                href: "#",
                label: "LinkedIn"
              }, {
                icon: Github,
                href: "#",
                label: "GitHub"
              }, {
                icon: Mail,
                href: "mailto:contact@studybuddyfinder.com",
                label: "Email"
              }].map(social => (
                <a 
                  key={social.label} 
                  href={social.href} 
                  className="glass w-10 h-10 rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300 hover:scale-110"
                  aria-label={`Follow us on ${social.label}`}
                  rel="noopener noreferrer"
                  target={social.href.startsWith('mailto') ? '_self' : '_blank'}
                >
                  <social.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "How It Works", "Benefits", "Future Scope"].map(link => <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {["Help Center", "Privacy Policy", "Terms of Service", "Contact Us"].map(link => <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-glass-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Study Buddy Finder. Made with <span className="text-primary" aria-label="love">❤️</span> by Giridhar & Srishti. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;