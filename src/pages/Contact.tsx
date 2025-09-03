import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Shield, Users } from "lucide-react";

const Contact = () => {
  const emergencyContacts = [
    {
      title: "Tourist Helpline",
      phone: "1363",
      description: "24/7 tourist assistance and emergency support",
      icon: Phone
    },
    {
      title: "Police Emergency",
      phone: "100",
      description: "Immediate police assistance for emergencies",
      icon: Shield
    },
    {
      title: "Tourist Police",
      phone: "+91-1800-111-363",
      description: "Dedicated tourist police helpline",
      icon: Users
    }
  ];

  const regionalOffices = [
    {
      state: "Goa",
      address: "Tourist Police Station, Panaji, Goa - 403001",
      phone: "+91-832-2420011",
      email: "touristpolice.goa@gov.in"
    },
    {
      state: "Kerala",
      address: "Tourism Police Station, Kochi, Kerala - 682001", 
      phone: "+91-484-2371025",
      email: "touristpolice.kerala@gov.in"
    },
    {
      state: "Rajasthan",
      address: "Tourist Assistance Force, Jaipur, Rajasthan - 302001",
      phone: "+91-141-2743776",
      email: "touristpolice.rajasthan@gov.in"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-6">
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Phone className="h-6 w-6 text-government" />
              Contact & Emergency Services
            </h1>
            <p className="text-muted-foreground mt-1">
              Get help and support for tourists across India
            </p>
          </div>

          {/* Emergency Contacts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className="border-l-4 border-l-destructive">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-destructive">
                    <contact.icon className="h-5 w-5" />
                    {contact.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-foreground mb-2">{contact.phone}</p>
                  <p className="text-sm text-muted-foreground">{contact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Office Hours */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-government" />
                Office Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Tourist Police Stations</h3>
                  <p className="text-sm text-muted-foreground">Monday - Sunday: 24 Hours</p>
                  <p className="text-sm text-muted-foreground">Emergency services available round the clock</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Administrative Offices</h3>
                  <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm text-muted-foreground">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Regional Offices */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-government" />
                Regional Tourist Police Offices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {regionalOffices.map((office, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-3">{office.state}</h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">{office.address}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <p className="text-sm text-foreground">{office.phone}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <p className="text-sm text-foreground">{office.email}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* General Information */}
          <Card>
            <CardHeader>
              <CardTitle>Important Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">For Tourists</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Always carry valid identification documents</li>
                    <li>Register your digital ID at entry points</li>
                    <li>Keep emergency contact numbers readily available</li>
                    <li>Report any suspicious activities immediately</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Emergency Procedures</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Call the appropriate emergency number based on the situation</li>
                    <li>Provide clear location details and nature of emergency</li>
                    <li>Stay calm and follow instructions from authorities</li>
                    <li>Ensure your digital ID is accessible for quick verification</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Contact;