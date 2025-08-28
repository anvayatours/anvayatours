import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import TravelButton from "@/components/TravelButton";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-travel.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
  Crafting <span className="text-travel-cream">Your Perfect Journey</span>
</h1>
<p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
  Bespoke travel experiences tailored to your preferences, from luxurious retreats to unforgettable family adventures.
</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/packages">
              <TravelButton variant="hero" size="xl">
                Explore Packages
              </TravelButton>
            </Link>
            <Link to="/contact">
  <TravelButton variant="hero" size="xl" className="hover:scale-105 transition-transform duration-300">
    Plan My Trip
  </TravelButton>
</Link>

          </div>
        </div>
      </section>

      {/* About Section */}
<section className="py-20 px-4">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
        Story <span className="text-primary">About Us</span>
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        We are your trusted partner in travel, offering personalized, memorable journeys inspired by a passion for exploring the world. 
        From relaxing getaways to thrilling adventures, we craft experiences tailored just for you — seamless, unique, and unforgettable.
        <br /><br />
        At Anvaya Tours, our mission is to craft exceptional journeys that meet your specific needs — whether it’s a dream vacation, 
        an adventurous expedition, or a peaceful weekend getaway.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <Card className="shadow-card-travel border-0">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">Expert Planning</h3>
          <p className="text-muted-foreground leading-relaxed">
            Our travel experts craft detailed itineraries based on your interests, budget, and dreams.
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-card-travel border-0">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">Handpicked Stays</h3>
          <p className="text-muted-foreground leading-relaxed">
            Carefully selected accommodations that enhance your travel experience and create lasting memories.
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-card-travel border-0">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">Seamless Support</h3>
          <p className="text-muted-foreground leading-relaxed">
            24/7 support from start to finish, ensuring your journey is effortless and worry-free.
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="bg-gradient-section py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Let us create a travel experience that's uniquely yours. Start planning your unforgettable journey today.
          </p>
          <Link to="/contact">
            <TravelButton variant="hero" size="xl">
              Start Planning
            </TravelButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;