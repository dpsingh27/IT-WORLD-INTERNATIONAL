import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star, Download, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const products = [
  {
    id: 'smartverse-edu',
    name: 'SmartVerse Edu',
    tagline: 'Complete School Management System',
    description: 'An all-in-one solution for managing school operations, from admissions to academics to finances.',
    features: [
      'Student Information Management',
      'Attendance Tracking',
      'Fee Management & Billing',
      'Exam & Grade Management',
      'Parent Portal Access',
      'Staff Management',
      'Library Management',
      'Transport Management',
    ],
    pricing: 'Starting from ₹15,000/year',
    badge: 'Most Popular',
    color: 'primary',
  },
  {
    id: 'smartverse-pos',
    name: 'SmartVerse POS',
    tagline: 'Point of Sale Solution',
    description: 'Streamline your retail operations with our intuitive point of sale system.',
    features: [
      'Fast Billing & Invoicing',
      'Inventory Management',
      'Barcode Scanning',
      'Multi-Store Support',
      'Sales Analytics',
      'Customer Database',
      'Discount Management',
      'GST Compliant',
    ],
    pricing: 'Starting from ₹8,000/year',
    badge: 'Best Seller',
    color: 'secondary',
  },
  {
    id: 'smartverse-bill',
    name: 'SmartVerse Bill Pro',
    tagline: 'Advanced Billing Software',
    description: 'Professional billing and accounting software for businesses of all sizes.',
    features: [
      'GST Invoice Generation',
      'Quotation & Estimates',
      'Expense Tracking',
      'Bank Reconciliation',
      'Financial Reports',
      'Multi-User Access',
      'Data Backup',
      'Tax Filing Support',
    ],
    pricing: 'Starting from ₹6,000/year',
    badge: null,
    color: 'primary',
  },
  {
    id: 'smartverse-dairy',
    name: 'SmartVerse Dairy',
    tagline: 'Dairy Management Solution',
    description: 'Comprehensive solution for managing dairy operations and milk collection.',
    features: [
      'Milk Collection Tracking',
      'Fat & SNF Analysis',
      'Automatic Rate Calculation',
      'Farmer Payment Management',
      'Stock Inventory',
      'Sales & Distribution',
      'Reports & Analytics',
      'Mobile App Support',
    ],
    pricing: 'Starting from ₹10,000/year',
    badge: 'New',
    color: 'secondary',
  },
];

const hardware = [
  {
    name: 'CCTV Systems',
    items: ['HD Dome Cameras', '4K Bullet Cameras', 'PTZ Cameras', 'NVR/DVR Systems', 'CCTV Cables & Accessories'],
  },
  {
    name: 'Solar Equipment',
    items: ['Solar Panels', 'Inverters', 'Batteries', 'Mounting Structures', 'Monitoring Systems'],
  },
  {
    name: 'Networking',
    items: ['LAN Cables (Cat5e/Cat6)', 'Routers & Switches', 'Patch Panels', 'RJ45 Connectors', 'Crimping Tools'],
  },
  {
    name: 'Computer Hardware',
    items: ['Desktops & Laptops', 'Printers & Scanners', 'Monitors', 'Keyboards & Mice', 'External Storage'],
  },
];

const Products = () => {
  const heroAnimation = useScrollAnimation();
  const softwareAnimation = useScrollAnimation();
  const hardwareAnimation = useScrollAnimation();

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
              Our Products
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Software & Hardware Solutions
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Explore our range of software products and hardware equipment designed to power your business.
            </p>
          </div>
        </div>
      </section>

      {/* Software Products */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div
            ref={softwareAnimation.ref}
            className={`text-center max-w-3xl mx-auto mb-16 ${softwareAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'}`}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              SmartVerse Suite
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Software Products
            </h2>
            <p className="text-muted-foreground text-lg">
              Industry-specific software solutions designed for Indian businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`bg-card rounded-2xl overflow-hidden shadow-card hover-lift ${
                  softwareAnimation.isVisible ? `animate-fade-up stagger-${index + 1}` : 'opacity-0'
                }`}
              >
                {/* Header */}
                <div className={`p-6 ${product.color === 'primary' ? 'gradient-primary' : 'bg-secondary'}`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className={`font-display text-2xl font-bold ${product.color === 'primary' ? 'text-primary-foreground' : 'text-secondary-foreground'}`}>
                        {product.name}
                      </h3>
                      <p className={`${product.color === 'primary' ? 'text-primary-foreground/70' : 'text-secondary-foreground/70'}`}>
                        {product.tagline}
                      </p>
                    </div>
                    {product.badge && (
                      <span className="px-3 py-1 bg-background text-foreground rounded-full text-xs font-medium">
                        {product.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-6">{product.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <span className="text-sm text-muted-foreground">Pricing</span>
                      <p className="font-display font-bold text-lg">{product.pricing}</p>
                    </div>
                    <Button asChild className="gradient-primary">
                      <Link to="/contact">
                        Get Started <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">All software comes with free installation, training, and 1 year of support.</p>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                Request Demo <Play className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hardware Products */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div
            ref={hardwareAnimation.ref}
            className={`text-center max-w-3xl mx-auto mb-16 ${hardwareAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'}`}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Hardware & Equipment
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Quality Hardware Products
            </h2>
            <p className="text-muted-foreground text-lg">
              We supply high-quality hardware and equipment for all your IT needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {hardware.map((category, index) => (
              <div
                key={category.name}
                className={`bg-card p-6 rounded-2xl shadow-card hover-lift ${
                  hardwareAnimation.isVisible ? `animate-fade-up stagger-${index + 1}` : 'opacity-0'
                }`}
              >
                <h3 className="font-display text-xl font-bold mb-4 text-primary">{category.name}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-secondary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 bg-card p-8 rounded-2xl shadow-card max-w-2xl mx-auto">
            <h3 className="font-display text-xl font-bold mb-3">Need a Custom Quote?</h3>
            <p className="text-muted-foreground mb-6">
              Contact us for bulk orders and special pricing on hardware products.
            </p>
            <Button asChild className="gradient-primary">
              <Link to="/contact">
                Get Hardware Quote <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
