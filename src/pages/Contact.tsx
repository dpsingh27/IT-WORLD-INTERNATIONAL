import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+91 95323 98715', '+91 95063 09320'],
    action: 'tel:+919532398715',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['sales@itworldinternational.com', 'support@itworldinternational.com'],
    action: 'mailto:sales@itworldinternational.com',
  },
  {
    icon: MapPin,
    title: 'Address',
    details: ['DB Super Market, Sultanpur', 'Uttar Pradesh 228001, India'],
    action: 'https://maps.google.com/?q=Sultanpur,UP,India',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Saturday: 9:00 AM - 7:00 PM', 'Sunday: Closed'],
    action: null,
  },
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/itworldinternational', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/itworldinternational', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/itworldinternational', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/itworldintl', label: 'Twitter' },
  { icon: Youtube, href: 'https://youtube.com/@itworldinternational', label: 'YouTube' },
];

const services = [
  'CCTV Installation',
  'Solar Energy Solutions',
  'Software Development',
  'Web Design',
  'Business Consulting',
  'Digital Marketing',
  'IT Hardware',
  'Computer Repair',
  'Other',
];

const Contact = () => {
  const heroAnimation = useScrollAnimation();
  const formAnimation = useScrollAnimation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: 'Message Sent!',
      description: 'We\'ll get back to you within 24 hours.',
    });

    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
              Contact Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Get in Touch With Us
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div
              ref={formAnimation.ref}
              className={formAnimation.isVisible ? 'animate-slide-right' : 'opacity-0'}
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex gap-4">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center shrink-0">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold mb-1">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        info.action ? (
                          <a
                            key={idx}
                            href={info.action}
                            className="block text-muted-foreground hover:text-primary transition-colors"
                            target={info.action.startsWith('http') ? '_blank' : undefined}
                            rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {detail}
                          </a>
                        ) : (
                          <p key={idx} className="text-muted-foreground">{detail}</p>
                        )
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-display font-bold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-10 p-6 bg-[#25D366]/10 rounded-2xl border border-[#25D366]/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#25D366] rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg">Chat on WhatsApp</h3>
                    <p className="text-muted-foreground text-sm">Get instant response from our team</p>
                  </div>
                </div>
                <Button
                  asChild
                  className="w-full mt-4 bg-[#25D366] hover:bg-[#20BD5A] text-white"
                >
                  <a
                    href="https://wa.me/919532398715?text=Hello! I am interested in your services."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start Chat <MessageCircle className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className={formAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'}>
              <div className="bg-card p-8 md:p-10 rounded-2xl shadow-card">
                <h2 className="font-display text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full gradient-primary" disabled={isSubmitting}>
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="rounded-2xl overflow-hidden shadow-card h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114267.39317882089!2d82.0154!3d26.2648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399030a1b5c26b0d%3A0x3c27a0b36c1b3f0!2sSultanpur%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1705318800000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IT World International Location"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
