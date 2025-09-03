import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Download, Bell, MapPin, Clock } from "lucide-react";
import DataTable from "@/components/dashboard/DataTable";

const Alerts = () => {
  const alertsData = [
    {
      id: "ALT-001",
      type: "Missing Person",
      location: "Goa Beach",
      reportedBy: "Hotel Manager",
      severity: "High",
      status: "Open",
      timestamp: "2024-01-20T10:30:00",
      description: "Tourist missing from hotel since morning"
    },
    {
      id: "ALT-002", 
      type: "Medical Emergency",
      location: "Kerala Backwaters",
      reportedBy: "Tour Guide",
      severity: "Critical",
      status: "Resolved",
      timestamp: "2024-01-19T15:45:00",
      description: "Tourist injured during boat ride"
    },
    {
      id: "ALT-003",
      type: "Safety Concern",
      location: "Rajasthan Desert",
      reportedBy: "Local Authority",
      severity: "Medium",
      status: "Pending",
      timestamp: "2024-01-18T08:15:00",
      description: "Weather warning for desert area"
    }
  ];

  const alertColumns = [
    { key: "id", label: "Alert ID" },
    { key: "type", label: "Type" },
    { key: "location", label: "Location" },
    { key: "severity", label: "Severity", render: (value: string) => (
      <Badge className={
        value === "Critical" ? "bg-destructive text-destructive-foreground" :
        value === "High" ? "bg-warning text-warning-foreground" :
        "bg-secondary text-secondary-foreground"
      }>
        {value}
      </Badge>
    )},
    { key: "status", label: "Status" },
    { key: "timestamp", label: "Reported" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-warning" />
                Alert Management System
              </h1>
              <p className="text-muted-foreground mt-1">
                Monitor and manage tourist safety alerts and incidents
              </p>
            </div>
            <Button className="bg-government hover:bg-government/90">
              <Download className="h-4 w-4 mr-2" />
              Export Alerts
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Active Alerts</p>
                    <p className="text-2xl font-bold text-destructive">24</p>
                  </div>
                  <Bell className="h-8 w-8 text-destructive" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Critical Cases</p>
                    <p className="text-2xl font-bold text-destructive">3</p>
                  </div>
                  <AlertTriangle className="h-8 w-8 text-destructive" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Resolved Today</p>
                    <p className="text-2xl font-bold text-success">12</p>
                  </div>
                  <Clock className="h-8 w-8 text-success" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Locations Monitored</p>
                    <p className="text-2xl font-bold text-government">47</p>
                  </div>
                  <MapPin className="h-8 w-8 text-government" />
                </div>
              </CardContent>
            </Card>
          </div>

          <DataTable 
            title="Recent Alerts"
            data={alertsData}
            columns={alertColumns}
          />
        </div>
      </main>
    </div>
  );
};

export default Alerts;