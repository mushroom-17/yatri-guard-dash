import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Download, TrendingUp, Calendar, FileBarChart } from "lucide-react";

const Reports = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-government" />
                Reports & Analytics
              </h1>
              <p className="text-muted-foreground mt-1">
                Generate comprehensive reports and view analytics data
              </p>
            </div>
            <Button className="bg-government hover:bg-government/90">
              <Download className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
          </div>

          {/* Report Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-success" />
                  Tourist Analytics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Monthly visitor statistics, demographics, and trend analysis
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    Monthly Tourist Report
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Demographics Analysis
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Seasonal Trends
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-warning" />
                  Safety Reports
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Incident reports, safety statistics, and emergency response data
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    Incident Analysis
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Emergency Response
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Safety Metrics
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileBarChart className="h-5 w-5 text-government" />
                  System Reports
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Digital ID statistics, E-FIR analytics, and system performance
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    Digital ID Usage
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    E-FIR Statistics
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    System Performance
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <p className="text-2xl font-bold text-government">1,247</p>
                  <p className="text-sm text-muted-foreground">Active Tourists</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <p className="text-2xl font-bold text-warning">156</p>
                  <p className="text-sm text-muted-foreground">Total FIRs</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <p className="text-2xl font-bold text-destructive">24</p>
                  <p className="text-sm text-muted-foreground">Open Alerts</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <p className="text-2xl font-bold text-success">98.5%</p>
                  <p className="text-sm text-muted-foreground">System Uptime</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Reports;