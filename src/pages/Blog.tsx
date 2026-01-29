import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Computing: AI, Quantum, and Beyond',
    excerpt: 'Explore how artificial intelligence and quantum computing are reshaping the technology landscape and what it means for businesses.',
    category: 'Technology',
    author: 'IT World Team',
    date: '2024-01-15',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  },
  {
    id: 2,
    title: 'Why Businesses Need IT Solutions in 2024',
    excerpt: 'Technology is no longer optional for businesses. Learn why investing in IT infrastructure is crucial for staying competitive.',
    category: 'Business',
    author: 'IT World Team',
    date: '2024-01-10',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
  },
  {
    id: 3,
    title: 'Solar Energy: A Smart Investment for Indian Homes',
    excerpt: 'With rising electricity costs and government incentives, solar energy has never been more accessible. Here\'s what you need to know.',
    category: 'Solar Energy',
    author: 'IT World Team',
    date: '2024-01-05',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
  },
  {
    id: 4,
    title: 'CCTV Installation Best Practices for Maximum Security',
    excerpt: 'Installing CCTV cameras? Follow these expert tips to ensure optimal coverage and effective monitoring of your property.',
    category: 'Security',
    author: 'IT World Team',
    date: '2023-12-28',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80',
  },
  {
    id: 5,
    title: 'How ERP Software Transforms Business Operations',
    excerpt: 'Discover how Enterprise Resource Planning software can streamline your business processes and boost productivity.',
    category: 'Software',
    author: 'IT World Team',
    date: '2023-12-20',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    id: 6,
    title: 'Digital Marketing Strategies for Local Businesses',
    excerpt: 'Learn effective digital marketing techniques that can help local businesses attract more customers and grow their reach.',
    category: 'Marketing',
    author: 'IT World Team',
    date: '2023-12-15',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c2c4?w=800&q=80',
  },
];

const categories = ['All', 'Technology', 'Business', 'Solar Energy', 'Security', 'Software', 'Marketing'];

const Blog = () => {
  const heroAnimation = useScrollAnimation();
  const postsAnimation = useScrollAnimation();

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
              Our Blog
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Insights & Updates
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Stay updated with the latest trends in technology, business solutions, and industry insights.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border sticky top-20 bg-background z-40">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === 'All'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container">
          <div
            ref={postsAnimation.ref}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className={`bg-card rounded-2xl overflow-hidden shadow-card hover-lift ${
                  postsAnimation.isVisible ? `animate-fade-up stagger-${Math.min(index + 1, 6)}` : 'opacity-0'
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-display text-xl font-bold mb-3 line-clamp-2 hover:text-primary transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-primary font-medium text-sm hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-6">
              Get the latest articles and updates delivered directly to your inbox.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="gradient-primary">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
