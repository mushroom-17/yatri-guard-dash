import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import Header from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Download, TrendingUp, Calendar, FileBarChart } from "lucide-react";

const DashboardReports = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SidebarProvider>
        <div className="flex">
          <DashboardSidebar />
          <main className="flex-1 p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Reports & Analytics</h1>
                  <p className="text-muted-foreground">
                    Generate detailed reports and view system analytics
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
                      Comprehensive tourist statistics and trend analysis
                    </p>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        Monthly Visitor Report
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
                      Safety & Security
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Safety incidents and security analytics
                    </p>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        Incident Reports
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
                      System Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      System usage and performance metrics
                    </p>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        Digital ID Usage
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        E-FIR Statistics
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        System Uptime
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default DashboardReports;