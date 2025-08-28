import Navigation from "@/components/Navigation";
import TravelButton from "@/components/TravelButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Packages = () => {
  const packages = [
    {
      id: 1,
      title: "Singapore – 5 Nights / 6 Days",
      description:
        "Explore Singapore with all important attractions, private tours, and premium accommodation. Perfect for those seeking a complete and comfortable travel experience.",
      duration: "5 nights / 6 days",
      price: "INR 91,000 per adult",
      features: [
        "All important attractions",
        "All tours on private basis",
        "Accommodation at 4-star hotel"
      ],
      category: "International"
    },
    {
      id: 2,
      title: "Vietnam – 6 Nights / 7 Days",
      description:
        "Discover the charm of Vietnam with its rich culture, scenic landscapes, and private tours for a truly exclusive experience.",
      duration: "6 nights / 7 days",
      price: "INR 80,000 per adult",
      features: [
        "All important attractions",
        "All tours on private basis",
        "Accommodation at 4-star hotel"
      ],
      category: "International"
    },
    {
      id: 3,
      title: "Bali – 7 Nights / 8 Days",
      description:
        "Experience Bali’s tropical paradise with beaches, temples, and private guided tours while enjoying luxury comfort.",
      duration: "7 nights / 8 days",
      price: "INR 54,000 per adult",
      features: [
        "All important attractions",
        "All tours on private basis",
        "Accommodation at 4-star hotel"
      ],
      category: "International"
    },
    {
      id: 4,
      title: "Andaman – 3 Nights / 4 Days",
      description:
        "Enjoy the serene beaches and natural beauty of the Andaman Islands with personalized tours and premium stays.",
      duration: "3 nights / 4 days",
      price: "INR 35,000 per adult",
      features: [
        "All important attractions",
        "All tours on private basis",
        "Accommodation at 4-star hotel"
      ],
      category: "Domestic"
    },
    {
      id: 5,
      title: "Phuket, Pattaya & Bangkok – 7 Nights / 8 Days",
      description:
        "Explore the best of Thailand from the beaches of Phuket to the vibrant cities of Pattaya and Bangkok, with private tours and luxury stays.",
      duration: "7 nights / 8 days",
      price: "INR 52,800 per adult",
      features: [
        "All important attractions",
        "All tours on private basis",
        "Accommodation at 4-star hotel"
      ],
      category: "International"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="py-20 px-4 bg-gradient-section">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
            Travel <span className="text-primary">Packages</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked travel packages designed for comfort, privacy, and unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.id} className="shadow-card-travel border-0 hover:shadow-travel transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary" className="bg-travel-light-olive text-travel-dark-olive">
                      {pkg.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{pkg.duration}</span>
                  </div>
                  <CardTitle className="font-serif text-2xl text-foreground">{pkg.title}</CardTitle>
                  <p className="text-muted-foreground leading-relaxed">{pkg.description}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Includes:</h4>
                      <ul className="space-y-1">
                        {pkg.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-muted-foreground">
                            <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-xl font-semibold text-primary">{pkg.price}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package CTA */}
      
    </div>
  );
};

export default Packages;
