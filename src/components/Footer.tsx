import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = 2026;

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-2">Kennedy Mwau Wambua</h3>
            <p className="text-copper text-sm tracking-widest uppercase mb-4">Construction Architect</p>
            <p className="text-primary-foreground/70 leading-relaxed">
              Premium residential and commercial properties in Kitengela, Kajiado County. 
              Your trusted partner in construction and architectural excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-copper transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-primary-foreground/70 hover:text-copper transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/70 hover:text-copper transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-copper transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:0705822854" className="flex items-center gap-3 text-primary-foreground/70 hover:text-copper transition-colors">
                  <Phone size={16} />
                  <span>0705822854</span>
                </a>
              </li>
              <li>
                <a href="mailto:kennedywambua@gmail.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-copper transition-colors">
                  <Mail size={16} />
                  <span>kennedywambua@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin size={16} />
                <span>Kitengela, Kajiado County</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/60 text-sm">
            Copyright © {currentYear} Kennedy Mwau Wambua. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
