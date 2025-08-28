"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Shield, 
  Trash2, 
  MapPin, 
  Calendar, 
  Mail, 
  User, 
  MessageSquare,
  Plane,
  Phone,
  DollarSign,
} from "lucide-react";

import { db } from "@/lib/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

// Helper function to render star ratings
const renderStars = (count) => {
  return Array.from({ length: 5 }, (_, i) => (
    <svg
      key={i}
      className={`w-4 h-4 ${
        i < count ? 'text-yellow-400 fill-current' : 'text-gray-300'
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ));
};

export default function AdminPage() {
  const [tripRequests, setTripRequests] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const fetchData = async () => {
    setLoading(true);
    try {
      const tripsSnap = await getDocs(collection(db, "tripRequests"));
      const trips = tripsSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      const feedbackSnap = await getDocs(collection(db, "feedbacks"));
      const fbs = feedbackSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      setTripRequests(trips);
      setFeedbacks(fbs);

      toast({
        title: "Data loaded",
        description: `Found ${trips.length} trip requests and ${fbs.length} feedbacks`,
      });
    } catch (err) {
      console.error("Error fetching admin data:", err);
      toast({
        title: "Error",
        description: "Failed to load admin data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTrip = async (id) => {
    try {
      await deleteDoc(doc(db, "tripRequests", id));
      setTripRequests(tripRequests.filter((trip) => trip.id !== id));
      toast({
        title: "Deleted",
        description: "Trip request removed",
      });
    } catch (err) {
      console.error("Error deleting trip:", err);
      toast({
        title: "Error",
        description: "Failed to delete trip request",
        variant: "destructive",
      });
    }
  };

  const handleDeleteFeedback = async (id) => {
    try {
      await deleteDoc(doc(db, "feedbacks", id));
      setFeedbacks(feedbacks.filter((fb) => fb.id !== id));
      toast({
        title: "Deleted",
        description: "Feedback removed",
      });
    } catch (err) {
      console.error("Error deleting feedback:", err);
      toast({
        title: "Error",
        description: "Failed to delete feedback",
        variant: "destructive",
      });
    }
  };

  const handleLogin = () => {
    if (password === "shreyas") {
      setAuthorized(true);
      fetchData();
      toast({
        title: "Welcome",
        description: "Admin access granted",
      });
    } else {
      toast({
        title: "Access denied",
        description: "Invalid password",
        variant: "destructive",
      });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-accent/30 p-4">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center space-y-2">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold">Admin Portal</CardTitle>
            <p className="text-muted-foreground">Enter your credentials to access the dashboard</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>
            <Button onClick={handleLogin} className="w-full" size="lg">
              Access Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="space-y-4">
            <Skeleton className="h-8 w-48" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i}>
                  <CardHeader>
                    <Skeleton className="h-4 w-3/4" />
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary via-secondary to-accent p-6 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <Shield className="w-8 h-8 text-primary-foreground" />
            <div>
              <h1 className="text-3xl font-bold text-primary-foreground">Admin Dashboard</h1>
              <p className="text-primary-foreground/90">Manage trip requests and customer feedback</p>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card className="bg-card/90 border-0">
              <CardContent className="p-4 flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Plane className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{tripRequests.length}</p>
                  <p className="text-muted-foreground">Trip Requests</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/90 border-0">
              <CardContent className="p-4 flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{feedbacks.length}</p>
                  <p className="text-muted-foreground">Customer Feedbacks</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-12">
        {/* Trip Requests Section */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <Plane className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Trip Requests</h2>
            <Badge variant="secondary">{tripRequests.length}</Badge>
          </div>
          
          {tripRequests.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {tripRequests.map((trip) => (
                <Card key={trip.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{trip.firstName} {trip.lastName}</span>
                      </CardTitle>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeleteTrip(trip.id)}
                        className="hover:bg-destructive/90"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{trip.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{trip.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">{trip.destination}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Plane className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium text-muted-foreground capitalize">{trip.tripType}</span>
                    </div>
                    {trip.budget && (
                      <div className="flex items-center space-x-2 text-sm">
                        <DollarSign className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium text-muted-foreground">{trip.budget}</span>
                      </div>
                    )}
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm leading-relaxed">{trip.message}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <Plane className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No trip requests found</p>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Feedback Section */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <MessageSquare className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Customer Feedback</h2>
            <Badge variant="secondary">{feedbacks.length}</Badge>
          </div>
          
          {feedbacks.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {feedbacks.map((fb) => (
                <Card key={fb.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{fb.name}</span>
                      </CardTitle>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeleteFeedback(fb.id)}
                        className="hover:bg-destructive/90"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{fb.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground font-medium">{fb.destination}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {renderStars(fb.rating)}
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm leading-relaxed">{fb.feedback}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No feedback found</p>
              </CardContent>
            </Card>
          )}
        </section>
      </div>
    </div>
  );
}