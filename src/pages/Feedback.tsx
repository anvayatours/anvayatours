import Navigation from "@/components/Navigation";
import TravelButton from "@/components/TravelButton";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Feedback = () => {
  const [rating, setRating] = useState(0);

  const testimonials = [
    {
      name: "Sarah & Michael Chen",
      location: "Bali, Indonesia",
      text: "Anvaya Tours created the perfect honeymoon for us. Every detail was thoughtfully planned, from the private villa overlooking rice terraces to the couples cooking class. It truly felt like our dream come true.",
      rating: 5,
      trip: "Romantic Getaway"
    },
    {
      name: "Jennifer Martinez",
      location: "Morocco Cultural Tour",
      text: "As a solo female traveler, I was nervous about exploring Morocco alone. Anvaya Tours provided me with amazing local guides and perfectly safe accommodations. The experience exceeded all my expectations!",
      rating: 5,
      trip: "Solo Discovery"
    },
    {
      name: "The Johnson Family",
      location: "Costa Rica Adventure",
      text: "Our kids still talk about our Costa Rica trip every day! The zip-lining, wildlife encounters, and beach time were perfectly balanced. Anvaya Tours understood exactly what our family needed.",
      rating: 5,
      trip: "Family Adventure"
    }
  ];

  const renderStars = (count: number, interactive = false) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < count ? 'text-yellow-400 fill-current' : 'text-gray-300'
        } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
        onClick={interactive ? () => setRating(i + 1) : undefined}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="py-20 px-4 bg-gradient-section">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
            Traveler <span className="text-primary">Stories</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Read what our travelers have to say about their unforgettable journeys with Anvaya Tours. 
            Your feedback helps us create even better experiences.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center text-foreground mb-12">
            What Our Travelers Say
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card-travel border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <p className="text-xs text-primary mt-1">{testimonial.trip}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="py-20 px-4 bg-gradient-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center text-foreground mb-12">
            Share Your Experience
          </h2>
          
          <Card className="shadow-travel border-0">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Your Name</Label>
                    <Input id="name" placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="destination" className="text-foreground">Trip Destination</Label>
                  <Input id="destination" placeholder="Where did you travel with us?" />
                </div>
                
                <div className="space-y-2">
                  <Label className="text-foreground">Rate Your Experience</Label>
                  <div className="flex items-center space-x-1">
                    {renderStars(rating, true)}
                    <span className="ml-2 text-sm text-muted-foreground">
                      {rating > 0 ? `${rating}/5 stars` : 'Click to rate'}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="feedback" className="text-foreground">Your Feedback</Label>
                  <Textarea 
                    id="feedback" 
                    placeholder="Tell us about your experience with Anvaya Tours..."
                    rows={6}
                  />
                </div>
                
                <div className="flex justify-center">
                  <TravelButton variant="hero" size="lg" type="submit">
                    Submit Feedback
                  </TravelButton>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Feedback;