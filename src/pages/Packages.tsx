import Navigation from "@/components/Navigation";
import TravelButton from "@/components/TravelButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Packages = () => {
  const packages = [
    {
      id: 1,
      title: "Romantic Getaway",
      description: "Intimate escapes designed for couples seeking romance and connection",
      duration: "3-7 days",
      price: "From $1,299",
      features: ["Private dining", "Couples spa", "Sunset tours", "Luxury accommodations"],
      category: "Romance"
    },
    {
      id: 2,
      title: "Family Adventure",
      description: "Fun-filled journeys that create lasting memories for the whole family",
      duration: "5-10 days",
      price: "From $2,199",
      features: ["Kid-friendly activities", "Family suites", "Educational tours", "Adventure parks"],
      category: "Family"
    },
    {
      id: 3,
      title: "Solo Discovery",
      description: "Personal journeys of self-discovery and cultural immersion",
      duration: "7-14 days",
      price: "From $1,899",
      features: ["Cultural experiences", "Local guides", "Photography tours", "Personal growth activities"],
      category: "Solo"
    },
    {
      id: 4,
      title: "Luxury Escapes",
      description: "Premium experiences with the finest accommodations and services",
      duration: "4-8 days",
      price: "From $3,499",
      features: ["5-star hotels", "Private transfers", "Michelin dining", "Exclusive access"],
      category: "Luxury"
    },
    {
      id: 5,
      title: "Adventure Tours",
      description: "Thrilling experiences for adrenaline seekers and outdoor enthusiasts",
      duration: "6-12 days",
      price: "From $1,699",
      features: ["Hiking & trekking", "Water sports", "Wildlife safaris", "Camping experiences"],
      category: "Adventure"
    },
    {
      id: 6,
      title: "Cultural Immersion",
      description: "Deep dives into local cultures, traditions, and authentic experiences",
      duration: "8-15 days",
      price: "From $2,299",
      features: ["Local homestays", "Cooking classes", "Art workshops", "Historical tours"],
      category: "Culture"
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
            Discover our carefully curated travel packages designed to match every adventure style. 
            Each package is fully customizable to your preferences and desires.
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
                        <TravelButton variant="outline" size="sm">
                          Customize
                        </TravelButton>
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
      <section className="py-20 px-4 bg-gradient-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Don't See What You're Looking For?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Every journey is unique. Let us create a completely custom package tailored to your specific dreams and preferences.
          </p>
          <TravelButton variant="hero" size="xl">
            Create Custom Package
          </TravelButton>
        </div>
      </section>
    </div>
  );
};

export default Packages;