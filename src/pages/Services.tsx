import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Sun, Code, Monitor, Users, TrendingUp, Printer, Wrench, CheckCircle2, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import cctvImage from '@/assets/cctv-service.jpg';
import solarImage from '@/assets/solar-service.jpg';
import softwareImage from '@/assets/software-dev.jpg';
import webImage from '@/assets/web-design.jpg';

const services = [
  {
    id: 'cctv',
    icon: Shield,
    title: 'CCTV Installation & Security',
    description: 'Comprehensive security surveillance solutions to keep your property safe 24/7.',
    image: cctvImage,
    features: [
      'HD & 4K Camera Systems',
      '24/7 Live Monitoring',
      'Remote Access via Mobile',
      'Night Vision Capabilities',
      'Motion Detection Alerts',
      'Cloud Storage Options',
      'Professional Installation',
      'Annual Maintenance Plans',
    ],
    benefits: 'Protect your home, business, or institution with state-of-the-art CCTV systems. Our expert technicians ensure seamless installation and provide ongoing support.',
  },
  {
    id: 'solar',
    icon: Sun,
    title: 'Solar Energy Solutions',
    description: 'Harness renewable energy with our efficient solar panel installations.',
    image: solarImage,
    features: [
      'Rooftop Solar Panels',
      'Battery Storage Systems',
      'Grid-Tie & Off-Grid Options',
      'Commercial Installations',
      'Residential Solutions',
      'Government Subsidy Assistance',
      'Performance Monitoring',
      'Maintenance & Repairs',
    ],
    benefits: 'Reduce electricity bills by up to 80% and contribute to a greener future. Our solar solutions are designed for maximum efficiency and durability.',
  },
  {
    id: 'software',
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business requirements.',
    image: softwareImage,
    features: [
      'ERP Software (SmartVerse)',
      'Point of Sale (POS) Systems',
      'Inventory Management',
      'Billing & Accounting',
      'School Management Software',
      'Dairy Management Software',
      'Custom Web Applications',
      'Mobile App Development',
    ],
    benefits: 'Streamline your operations with software designed specifically for your industry. Our SmartVerse suite offers ready-to-use solutions for various sectors.',
  },
  {
    id: 'web',
    icon: Monitor,
    title: 'Web Design & Development',
    description: 'Stunning, responsive websites that drive results.',
    image: webImage,
    features: [
      'Responsive Web Design',
      'E-commerce Websites',
      'Corporate Websites',
      'Landing Pages',
      'SEO Optimization',
      'Content Management',
      'Website Maintenance',
      'UI/UX Design',
    ],
    benefits: 'Make a lasting impression online with websites that look great on any device and are optimized for search engines.',
  },
  {
    id: 'consulting',
    icon: Users,
    title: 'Business Consulting',
    description: 'Strategic guidance to help your business thrive in the digital age.',
    image: null,
    features: [
      'Long-Term Planning',
      'Market Research & Analysis',
      'Financial Planning & Advice',
      'Process Optimization',
      'Digital Transformation',
      'IT Strategy Consulting',
      'Growth Strategies',
      'Performance Improvement',
    ],
    benefits: 'Get expert advice from industry professionals to take your business to the next level.',
  },
  {
    id: 'marketing',
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Boost your online presence with comprehensive marketing strategies.',
    image: null,
    features: [
      'Social Media Marketing',
      'SEO & Content Marketing',
      'Pay-Per-Click Advertising',
      'Email Marketing',
      'Brand Identity Design',
      'Video Editing & Reels',
      'Campaign Management',
      'Analytics & Reporting',
    ],
    benefits: 'Reach your target audience effectively and convert visitors into loyal customers.',
  },
  {
    id: 'hardware',
    icon: Printer,
    title: 'IT Hardware & Supplies',
    description: 'Quality IT equipment and supplies for your business needs.',
    image: null,
    features: [
      'LAN Cables & Networking',
      'Computer Lab Equipment',
      'Printers & Ink Solutions',
      'Desktop & Laptop Sales',
      'Hardware Installation',
      'Home Delivery & Setup',
      'Multi-Color Printing',
      'Bulk Order Discounts',
    ],
    benefits: 'Get reliable IT hardware with professional setup and support at competitive prices.',
  },
  {
    id: 'repair',
    icon: Wrench,
    title: 'Computer Repair Services',
    description: 'Expert repair and maintenance for all your computing devices.',
    image: null,
    features: [
      'Virus & Malware Removal',
      'Software Installation',
      'Hardware Repair',
      'Data Recovery',
      'Performance Optimization',
      'Laptop Screen Repair',
      'Backup Solutions',
      'Free Diagnostics',
    ],
    benefits: 'Get your devices running like new with our certified repair technicians.',
  },
];

const Services = () => {
  const heroAnimation = useScrollAnimation();

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 gradient-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10">
          <div
            ref={heroAnimation.ref}
            className={`text-center max-w-3xl mx-auto ${heroAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'}`}
          >
            <span className="inline-block px-4 py-2 bg-primary-foreground/20 text-primary-foreground rounded-full text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Comprehensive Technology Solutions
            </h1>
            <p className="text-lg text-primary-foreground/80">
              From security to software, solar to digital marketing — we offer end-to-end solutions for your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="space-y-20">
            {services.map((service, index) => {
              const serviceAnimation = useScrollAnimation();
              return (
                <div
                  key={service.id}
                  id={service.id}
                  ref={serviceAnimation.ref}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    serviceAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'
                  }`}
                >
                  {/* Image/Icon side */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    {service.image ? (
                      <div className="relative rounded-2xl overflow-hidden shadow-hover">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-80 object-cover"
                        />
                        <div className="absolute top-4 left-4 w-14 h-14 gradient-primary rounded-xl flex items-center justify-center shadow-soft">
                          <service.icon className="w-7 h-7 text-primary-foreground" />
                        </div>
                      </div>
                    ) : (
                      <div className="bg-muted/50 rounded-2xl p-12 flex items-center justify-center">
                        <div className="w-32 h-32 gradient-primary rounded-3xl flex items-center justify-center shadow-soft">
                          <service.icon className="w-16 h-16 text-primary-foreground" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content side */}
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-muted-foreground text-lg mb-6">{service.benefits}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button asChild className="gradient-primary shadow-soft">
                      <Link to="/contact">
                        Get Quote <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-dark">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              Can't find exactly what you're looking for? Contact us for a personalized consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link to="/contact">
                  Contact Us <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="tel:+919532398715">
                  <Phone className="w-5 h-5 mr-2" /> Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
