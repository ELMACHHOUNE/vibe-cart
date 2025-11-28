import { Users, Target, Heart, Award } from 'lucide-react';

const About = () => {
  const team = [
    { name: 'Sarah Johnson', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
    { name: 'Michael Chen', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
    { name: 'Emily Davis', role: 'Customer Success', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop' },
    { name: 'David Kim', role: 'Product Manager', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'We carefully curate every product to ensure the highest quality standards.',
    },
    {
      icon: Heart,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We go the extra mile to make you happy.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from products to service.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-soft via-white to-brand-soft py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-slide-up">
            About ShopHub
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            We're on a mission to make quality products accessible to everyone, 
            with an exceptional shopping experience that you'll love.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2024, ShopHub started with a simple idea: make online shopping better. 
                  We noticed that people wanted quality products at fair prices, delivered with care 
                  and exceptional customer service.
                </p>
                <p>
                  Today, we serve thousands of happy customers across the country, offering everything 
                  from the latest electronics to sustainable fashion. Our team carefully curates each 
                  product to ensure it meets our high standards.
                </p>
                <p>
                  We believe in building lasting relationships with our customers. That's why we offer 
                  hassle-free returns, responsive support, and a shopping experience that puts you first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glass-card p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-brand-blue to-brand-accent rounded-2xl flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-soft rounded-full mb-4">
              <Users className="w-8 h-8 text-brand-blue" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate individuals working together to bring you the best shopping experience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="glass-card overflow-hidden rounded-xl group cursor-pointer">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-blue to-brand-accent">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of thousands of satisfied customers who trust ShopHub for their shopping needs.
          </p>
          <a
            href="/products"
            className="inline-block px-8 py-4 bg-white text-brand-blue rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Start Shopping
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
