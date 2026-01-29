import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, MapPin, Clock, CheckCircle2, Users, TrendingUp, Heart, Zap, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const openPositions = [
  {
    id: 1,
    title: 'Account Manager',
    department: 'Sales',
    location: 'Sultanpur, UP',
    type: 'Full-time',
    description: 'Manage client relationships and drive business growth through excellent customer service.',
    requirements: [
      'Bachelor\'s degree in Business or related field',
      '2+ years of sales or account management experience',
      'Excellent communication skills in Hindi and English',
      'Proficiency in MS Office and CRM tools',
    ],
  },
  {
    id: 2,
    title: 'Sales Executive',
    department: 'Sales',
    location: 'Sultanpur, UP',
    type: 'Full-time',
    description: 'Generate leads, meet clients, and close deals for our technology solutions.',
    requirements: [
      'Bachelor\'s degree (any stream)',
      '1+ years of sales experience',
      'Strong negotiation and presentation skills',
      'Valid driving license preferred',
    ],
  },
  {
    id: 3,
    title: 'IT Expert / Technical Support',
    department: 'Technical',
    location: 'Sultanpur, UP',
    type: 'Full-time',
    description: 'Provide technical support and handle installations for CCTV, networking, and computer systems.',
    requirements: [
      'Diploma/Degree in IT or Computer Science',
      'Knowledge of networking, CCTV systems, and computer hardware',
      'Problem-solving abilities',
      'Willingness to travel for on-site installations',
    ],
  },
  {
    id: 4,
    title: 'Software Developer',
    department: 'Development',
    location: 'Sultanpur, UP / Remote',
    type: 'Full-time',
    description: 'Develop and maintain web applications and software products for our SmartVerse suite.',
    requirements: [
      'B.Tech/MCA in Computer Science or related field',
      'Proficiency in JavaScript, React, Node.js',
      'Experience with databases (MySQL, MongoDB)',
      'Understanding of software development lifecycle',
    ],
  },
  {
    id: 5,
    title: 'Digital Marketing Executive',
    department: 'Marketing',
    location: 'Sultanpur, UP',
    type: 'Full-time',
    description: 'Plan and execute digital marketing campaigns across social media and search platforms.',
    requirements: [
      'Bachelor\'s degree in Marketing or related field',
      'Experience with social media marketing and SEO',
      'Knowledge of analytics tools (Google Analytics)',
      'Creative content creation skills',
    ],
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Clear career paths and opportunities to learn new skills.',
  },
  {
    icon: Users,
    title: 'Great Team',
    description: 'Work with passionate professionals in a collaborative environment.',
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'Flexible schedules and supportive work culture.',
  },
  {
    icon: Zap,
    title: 'Competitive Pay',
    description: 'Attractive salary packages with performance bonuses.',
  },
];

const Careers = () => {
  const heroAnimation = useScrollAnimation();
  const benefitsAnimation = useScrollAnimation();
  const positionsAnimation = useScrollAnimation();

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
              Join Our Team
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Build Your Career With Us
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Join IT World International and be part of a dynamic team that's shaping the future of technology in India.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div
            ref={benefitsAnimation.ref}
            className={`text-center max-w-3xl mx-auto mb-16 ${benefitsAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'}`}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Why Join Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Benefits of Working With Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`bg-card p-8 rounded-2xl shadow-card hover-lift text-center ${
                  benefitsAnimation.isVisible ? `animate-fade-up stagger-${index + 1}` : 'opacity-0'
                }`}
              >
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div
            ref={positionsAnimation.ref}
            className={`text-center max-w-3xl mx-auto mb-16 ${positionsAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'}`}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Open Positions
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Current Openings
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore our current job opportunities and find your perfect role.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <div
                key={position.id}
                className={`bg-card rounded-2xl shadow-card overflow-hidden ${
                  positionsAnimation.isVisible ? `animate-fade-up stagger-${Math.min(index + 1, 5)}` : 'opacity-0'
                }`}
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-xl font-bold mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <Button asChild className="gradient-primary shrink-0">
                      <a href={`mailto:itworldinternational0@gmail.com?subject=Application for ${position.title}`}>
                        Apply Now <Send className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                  <p className="text-muted-foreground mb-4">{position.description}</p>
                  <div>
                    <h4 className="font-medium mb-2">Requirements:</h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {position.requirements.map((req) => (
                        <li key={req} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-20 gradient-dark">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Don't See a Perfect Match?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              Send us your CV and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <a href="mailto:itworldinternational0@gmail.com?subject=General Job Application">
                  Send Your CV <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/contact">Contact HR</Link>
              </Button>
            </div>
            <p className="text-primary-foreground/50 text-sm mt-6">
              Email your CV to: itworldinternational0@gmail.com
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
