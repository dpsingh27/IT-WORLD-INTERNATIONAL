import { Link } from 'react-router-dom';
import { ArrowRight, Play, Shield, Sun, Code, Monitor, Users, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import heroImage from '@/assets/hero-tech.jpg';
import cctvImage from '@/assets/cctv-service.jpg';
import solarImage from '@/assets/solar-service.jpg';
import softwareImage from '@/assets/software-dev.jpg';
import webImage from '@/assets/web-design.jpg';
import teamImage from '@/assets/team-meeting.jpg';

const services = [
  {
    icon: Shield,
    title: 'CCTV Installation',
    description: '24/7 surveillance systems with remote monitoring, crystal clear video, and professional installation.',
    image: cctvImage,
    features: ['HD Video Quality', 'Remote Access', 'Night Vision', '24/7 Monitoring'],
  },
  {
    icon: Sun,
    title: 'Solar Energy Solutions',
    description: 'Harness the power of the sun with our efficient solar panel installations and battery storage systems.',
    image: solarImage,
    features: ['Panel Installation', 'Battery Storage', 'Maintenance', 'Cost Savings'],
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions including ERP systems, POS software, and enterprise applications.',
    image: softwareImage,
    features: ['Custom ERP', 'POS Systems', 'Mobile Apps', 'Cloud Solutions'],
  },
  {
    icon: Monitor,
    title: 'Web Design & Development',
    description: 'Stunning, responsive websites that capture attention and convert visitors into customers.',
    image: webImage,
    features: ['Responsive Design', 'SEO Optimized', 'E-commerce', 'CMS Integration'],
  },
];

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '200+', label: 'Happy Clients' },
  { value: '10+', label: 'Years Experience' },
  { value: '24/7', label: 'Support Available' },
];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    content: 'IT World International transformed our security with their CCTV solutions. Professional service and excellent support!',
  },
  {
    name: 'Priya Sharma',
    role: 'Hotel Manager',
    content: 'Their solar installation has reduced our electricity bills by 60%. Best investment we made for our property.',
  },
  {
    name: 'Amit Singh',
    role: 'Retail Store Owner',
    content: 'The custom POS software they developed has streamlined our operations. Highly recommended!',
  },
];

const Index = () => {
  const heroAnimation = useScrollAnimation();
  const servicesAnimation = useScrollAnimation();
  const statsAnimation = useScrollAnimation();
  const aboutAnimation = useScrollAnimation();
  const testimonialsAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="IT World International - Technology Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative z-10 py-20">
          <div
            ref={heroAnimation.ref}
            className={`max-w-2xl ${heroAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'}`}
          >
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-6">
              Trusted by 200+ Businesses Across India
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Empowering Business Through{' '}
              <span className="text-secondary">Technology</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              From CCTV security to solar energy, custom software to digital marketing — 
              we deliver end-to-end technology solutions that drive growth and innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-soft">
                <Link to="/services">
                  Explore Services <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/about">
                  <Play className="w-5 h-5 mr-2" /> Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 gradient-primary">
        <div className="container">
          <div
            ref={statsAnimation.ref}
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${
              statsAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center ${statsAnimation.isVisible ? `stagger-${index + 1}` : ''}`}
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div
            ref={servicesAnimation.ref}
            className={`text-center max-w-3xl mx-auto mb-16 ${
              servicesAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              From security to sustainability, we offer a complete range of IT services tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group bg-card rounded-2xl overflow-hidden shadow-card hover-lift ${
                  servicesAnimation.isVisible ? `animate-fade-up stagger-${index + 1}` : 'opacity-0'
                }`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-primary-foreground">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-primary font-medium hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="gradient-primary shadow-soft">
              <Link to="/services">
                View All Services <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              ref={aboutAnimation.ref}
              className={`relative ${aboutAnimation.isVisible ? 'animate-slide-right' : 'opacity-0'}`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-hover">
                <img
                  src={teamImage}
                  alt="IT World International Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 gradient-primary rounded-2xl flex items-center justify-center shadow-soft">
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-primary-foreground">10+</div>
                  <div className="text-sm text-primary-foreground/70">Years</div>
                </div>
              </div>
            </div>

            <div className={aboutAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'}>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                About Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Building Tomorrow's Technology Today
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                IT World International is a leading technology solutions provider based in Sultanpur, India. 
                We specialize in delivering innovative solutions that help businesses thrive in the digital age.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: Users, text: 'Expert team of certified professionals' },
                  { icon: TrendingUp, text: 'Proven track record of successful projects' },
                  { icon: Shield, text: 'Commitment to quality and customer satisfaction' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="gradient-primary shadow-soft">
                <Link to="/about">
                  Know More About Us <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div
            ref={testimonialsAnimation.ref}
            className={`text-center max-w-3xl mx-auto mb-16 ${
              testimonialsAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-lg">
              Don't just take our word for it — hear from the businesses we've helped succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`bg-card p-8 rounded-2xl shadow-card hover-lift ${
                  testimonialsAnimation.isVisible ? `animate-fade-up stagger-${index + 1}` : 'opacity-0'
                }`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-secondary fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-display font-bold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>
        <div className="container relative z-10">
          <div
            ref={ctaAnimation.ref}
            className={`text-center max-w-3xl mx-auto ${
              ctaAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              Get in touch with our experts today and discover how IT World International can help you achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-soft">
                <Link to="/contact">
                  Get Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="tel:+919532398715">
                  Call +91 95323 98715
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
