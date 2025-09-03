import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Users, 
  MapPin, 
  AlertTriangle, 
  FileText, 
  BarChart3,
  Clock,
  Phone,
  Mail
} from "lucide-react";

const HomePage = () => {
  const quickStats = [
    { label: "Active Tourists", value: "2,847", icon: Users, change: "+12%" },
    { label: "Open Alerts", value: "23", icon: AlertTriangle, change: "-5%" },
    { label: "Tourist Zones", value: "15", icon: MapPin, change: "0%" },
    { label: "E-FIRs Today", value: "8", icon: FileText, change: "+2%" },
  ];

  const announcements = [
    {
      title: "New Digital ID System Launched",
      date: "2024-01-15",
      priority: "High",
      content: "All tourists can now register for digital identification..."
    },
    {
      title: "Security Alert: Red Fort Area",
      date: "2024-01-14",
      priority: "Critical",
      content: "Increased police presence required in Red Fort tourist area..."
    },
    {
      title: "Monthly Tourism Report Available",
      date: "2024-01-13",
      priority: "Medium",
      content: "December 2023 tourism statistics and safety reports..."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome to YatriGuard Portal
          </h1>
          <p className="text-muted-foreground text-lg">
            Government Digital Platform for Tourism & Police Officials
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index} className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-xs text-success font-medium">
                      {stat.change} from last week
                    </p>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-full">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Quick Actions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="government" className="w-full justify-start">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Create New Alert
                </Button>
                <Button variant="government-outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  File E-FIR
                </Button>
                <Button variant="government-outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Register Tourist
                </Button>
                <Button variant="government-outline" className="w-full justify-start">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Reports
                </Button>
              </CardContent>
            </Card>

            {/* Emergency Contacts */}
            <Card className="shadow-card mt-6">
              <CardHeader>
                <CardTitle className="text-destructive">Emergency Contacts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-destructive" />
                  <span className="text-sm">Police Control: 100</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-destructive" />
                  <span className="text-sm">Tourist Helpline: 1363</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-destructive" />
                  <span className="text-sm">tourism@gov.in</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Announcements */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Recent Announcements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {announcements.map((announcement, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4 py-2">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">
                        {announcement.title}
                      </h4>
                      <div className="flex items-center space-x-2">
                        <Badge 
                          variant={
                            announcement.priority === "Critical" ? "destructive" :
                            announcement.priority === "High" ? "default" : "secondary"
                          }
                        >
                          {announcement.priority}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {new Date(announcement.date).toLocaleDateString("en-IN")}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {announcement.content}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-border">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 Government of India | YatriGuard Digital Platform</p>
            <p className="mt-1">For official use only by authorized personnel</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;