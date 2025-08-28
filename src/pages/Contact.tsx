"use client"; // if you're on Next.js App Router

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase"; // You need to have this file configured
import Navigation from "@/components/Navigation";
import TravelButton from "@/components/TravelButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  // State for form data, loading, and success messages
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    tripType: "",
    destination: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle changes to form inputs
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await addDoc(collection(db, "tripRequests"), formData);
      setSuccess(true);
      // Reset form fields after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        tripType: "",
        destination: "",
        message: ""
      });
    } catch (err) {
      console.error("Error adding document:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header Section */}
      <section className="py-20 px-4 bg-gradient-section">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to plan your perfect getaway? Our travel experts are here to help you create
            an unforgettable journey tailored to your dreams.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                Plan Your Trip
              </h2>
              <Card className="shadow-travel border-0">
                <CardContent className="p-8">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) => handleChange("firstName", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Smith"
                          value={formData.lastName}
                          onChange={(e) => handleChange("lastName", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-foreground">Phone</Label>
                        <Input
                          id="phone"
                          placeholder="+91 1234567895"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="tripType" className="text-foreground">Trip Type</Label>
                        <Select
                          value={formData.tripType}
                          onValueChange={(value) => handleChange("tripType", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select trip type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="romantic">Romantic Getaway</SelectItem>
                            <SelectItem value="family">Family Adventure</SelectItem>
                            <SelectItem value="solo">Solo Discovery</SelectItem>
                            <SelectItem value="luxury">Luxury Escape</SelectItem>
                            <SelectItem value="adventure">Adventure Tour</SelectItem>
                            <SelectItem value="cultural">Cultural Immersion</SelectItem>
                            <SelectItem value="custom">Custom Package</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="destination" className="text-foreground">Preferred Destination</Label>
                      <Input
                        id="destination"
                        placeholder="Where would you like to go?"
                        value={formData.destination}
                        onChange={(e) => handleChange("destination", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">Tell us about your dream trip</Label>
                      <Textarea
                        id="message"
                        placeholder="Describe your perfect vacation, special occasions, interests, or any specific requests..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                      />
                    </div>

                    <TravelButton
                      variant="hero"
                      size="lg"
                      className="w-full"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Start Planning My Trip"}
                    </TravelButton>
                    {success && <p className="text-green-600 mt-4">✅ Your request has been submitted!</p>}
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <Card className="shadow-card-travel border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center text-foreground">
                      <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Office Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      #101, SS Manor, 4th Floor,<br />
                      Outer Ring Road, Kalyan Nagar,<br />
                      Bangalore - 560043
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card-travel border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center text-foreground">
                      <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Phone, Email & GST
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-muted-foreground">
                      <span className="font-medium">Phone:</span>{" "}
                      <a href="tel:+919972025040" className="text-primary hover:underline">+91 99720 25040</a>
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Phone:</span>{" "}
                      <a href="tel:+917625070999" className="text-primary hover:underline">+91 76250 70999</a>
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Email:</span>{" "}
                      <a href="mailto:anvayatours@gmail.com" className="text-primary hover:underline">anvayatours@gmail.com</a>
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">GST No.:</span> 29ACHFA1153D1ZR
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card-travel border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center text-foreground">
                      <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>12:00 PM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-border">
                        <span className="font-medium">24/7 Support:</span>
                        <span>For active travelers</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;