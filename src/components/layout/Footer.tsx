import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const services = [
  'CCTV Installation',
  'Solar Energy Solutions',
  'Software Development',
  'Web Design',
  'Business Consulting',
  'Digital Marketing',
];

const quickLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'Careers', path: '/careers' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/itworldinternational', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/itworldinternational', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/itworldinternational', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/itworldintl', label: 'Twitter' },
  { icon: Youtube, href: 'https://youtube.com/@itworldinternational', label: 'YouTube' },
];

export const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-accent-foreground/10">
        <div className="container py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-accent-foreground/70">Get the latest updates, news, and offers directly to your inbox.</p>
            </div>
            <div className="flex w-full lg:w-auto gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-accent-foreground/10 border-accent-foreground/20 text-accent-foreground placeholder:text-accent-foreground/50 w-full lg:w-80"
              />
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shrink-0">
                Subscribe <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">IT</span>
              </div>
              <div>
                <h2 className="font-display font-bold text-lg">IT World</h2>
                <p className="text-xs text-accent-foreground/70">International</p>
              </div>
            </Link>
            <p className="text-accent-foreground/70 leading-relaxed">
              Empowering businesses with cutting-edge technology solutions. From CCTV to Solar Energy to Custom Software — we deliver excellence.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-accent-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-accent-foreground/70 hover:text-secondary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-accent-foreground/70 hover:text-secondary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919532398715" className="flex items-start gap-3 text-accent-foreground/70 hover:text-secondary transition-colors">
                  <Phone className="w-5 h-5 mt-0.5 shrink-0" />
                  <span>+91 95323 98715<br />+91 95063 09320</span>
                </a>
              </li>
              <li>
                <a href="mailto:sales@itworldinternational.com" className="flex items-start gap-3 text-accent-foreground/70 hover:text-secondary transition-colors">
                  <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                  <span>sales@itworldinternational.com<br />support@itworldinternational.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-accent-foreground/70">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span>DB Super Market, Sultanpur<br />Uttar Pradesh 228001, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-accent-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-accent-foreground/70 text-sm text-center md:text-left">
            © {new Date().getFullYear()} IT World International. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-accent-foreground/70 hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-accent-foreground/70 hover:text-secondary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
