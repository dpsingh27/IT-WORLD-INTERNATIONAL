import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Award, Users, Clock, CheckCircle2, Lightbulb, Heart, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import teamImage from '@/assets/team-meeting.jpg';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions.',
  },
  {
    icon: Heart,
    title: 'Customer Focus',
    description: 'Our clients are at the heart of everything we do. Your success is our success.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in every project, ensuring the highest quality standards.',
  },
  {
    icon: Zap,
    title: 'Agility',
    description: 'We adapt quickly to changing needs and deliver solutions on time, every time.',
  },
];

const milestones = [
  { year: '2014', title: 'Company Founded', description: 'Started as a small IT consulting firm in Sultanpur.' },
  { year: '2016', title: 'CCTV Division Launch', description: 'Expanded into security solutions and surveillance systems.' },
  { year: '2018', title: 'Solar Energy Entry', description: 'Added renewable energy solutions to our service portfolio.' },
  { year: '2020', title: 'SmartVerse Brand', description: 'Launched SmartVerse as our software development brand.' },
  { year: '2022', title: '200+ Clients', description: 'Reached milestone of serving over 200 satisfied clients.' },
  { year: '2024', title: 'National Expansion', description: 'Extended services across multiple states in India.' },
];

const About = () => {
  const heroAnimation = useScrollAnimation();
  const missionAnimation = useScrollAnimation();
  const valuesAnimation = useScrollAnimation();
  const timelineAnimation = useScrollAnimation();

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
              About IT World International
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Building the Future of Technology Since 2014
            </h1>
            <p className="text-lg text-primary-foreground/80">
              We are a multi-faceted technology company committed to delivering innovative solutions that transform businesses and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              ref={missionAnimation.ref}
              className={`${missionAnimation.isVisible ? 'animate-slide-right' : 'opacity-0'}`}
            >
              <img
                src={teamImage}
                alt="IT World International Team"
                className="rounded-2xl shadow-hover w-full"
              />
            </div>
            <div className={missionAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'}>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h2 className="font-display text-2xl font-bold">Our Mission</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower businesses and communities with innovative technology solutions that drive growth, 
                    enhance security, and promote sustainability. We are committed to delivering excellence in 
                    every project, building lasting relationships with our clients.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                      <Eye className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h2 className="font-display text-2xl font-bold">Our Vision</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To become India's most trusted technology partner, recognized for our innovative solutions, 
                    exceptional service quality, and positive impact on businesses and communities we serve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div
            ref={valuesAnimation.ref}
            className={`text-center max-w-3xl mx-auto mb-16 ${valuesAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'}`}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              The Principles That Guide Us
            </h2>
            <p className="text-muted-foreground text-lg">
              Our core values shape every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`bg-card p-8 rounded-2xl shadow-card hover-lift text-center ${
                  valuesAnimation.isVisible ? `animate-fade-up stagger-${index + 1}` : 'opacity-0'
                }`}
              >
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div
            ref={timelineAnimation.ref}
            className={`text-center max-w-3xl mx-auto mb-16 ${timelineAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'}`}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              A Decade of Growth & Innovation
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            
            <div className="space-y-8 md:space-y-0">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative md:grid md:grid-cols-2 md:gap-8 md:py-8 ${
                    timelineAnimation.isVisible ? `animate-fade-up stagger-${Math.min(index + 1, 6)}` : 'opacity-0'
                  }`}
                >
                  {/* Left content (even items) */}
                  <div className={`${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                    {index % 2 === 0 && (
                      <div className="bg-card p-6 rounded-xl shadow-card">
                        <div className="text-secondary font-display text-2xl font-bold mb-2">{milestone.year}</div>
                        <h3 className="font-display text-lg font-bold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full hidden md:block" />

                  {/* Right content (odd items) */}
                  <div className={`${index % 2 === 1 ? 'md:pl-12' : 'md:order-2'}`}>
                    {index % 2 === 1 && (
                      <div className="bg-card p-6 rounded-xl shadow-card">
                        <div className="text-secondary font-display text-2xl font-bold mb-2">{milestone.year}</div>
                        <h3 className="font-display text-lg font-bold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Mobile layout */}
                  <div className="md:hidden bg-card p-6 rounded-xl shadow-card">
                    <div className="text-secondary font-display text-2xl font-bold mb-2">{milestone.year}</div>
                    <h3 className="font-display text-lg font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-dark">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              Let's discuss how we can help your business grow with our technology solutions.
            </p>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link to="/contact">
                Get in Touch <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
