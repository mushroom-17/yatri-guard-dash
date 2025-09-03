import DashboardPageContainer from "@/components/layout/DashboardPageContainer";
import StatCard from "@/components/dashboard/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Shield, AlertTriangle, FileText, TrendingUp, Globe } from "lucide-react";

const DashboardStatistics = () => {
  return (
    <DashboardPageContainer title="System Statistics">
      <div className="space-y-6">
        <p className="text-muted-foreground">
          Comprehensive overview of YatriGuard system metrics
        </p>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <StatCard
                  title="Active Tourists"
                  value="1,247"
                  trend={{ value: 12, isPositive: true }}
                  icon={Users}
                />
                <StatCard
                  title="Digital IDs Issued"
                  value="856"
                  trend={{ value: 8, isPositive: true }}
                  icon={Shield}
                />
                <StatCard
                  title="Active Alerts"
                  value="24"
                  trend={{ value: 5, isPositive: false }}
                  icon={AlertTriangle}
                />
                <StatCard
                  title="E-FIRs Filed"
                  value="156"
                  trend={{ value: 15, isPositive: true }}
                  icon={FileText}
                />
        </div>

        {/* Detailed Analytics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-success" />
                      Tourist Trends
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Daily Average</span>
                        <span className="font-medium">67 tourists</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Peak Season</span>
                        <span className="font-medium">December - February</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Top Destination</span>
                        <span className="font-medium">Goa</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Average Stay</span>
                        <span className="font-medium">8.5 days</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-government" />
                      Geographic Distribution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">International Tourists</span>
                        <span className="font-medium">65%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Domestic Tourists</span>
                        <span className="font-medium">35%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Top Origin Country</span>
                        <span className="font-medium">USA</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">States Covered</span>
                        <span className="font-medium">28 / 28</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
        </div>

        {/* Safety Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Safety & Security Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <p className="text-2xl font-bold text-success">98.5%</p>
                <p className="text-sm text-muted-foreground">Safety Success Rate</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <p className="text-2xl font-bold text-government">4.2 min</p>
                <p className="text-sm text-muted-foreground">Avg Response Time</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <p className="text-2xl font-bold text-warning">12</p>
                <p className="text-sm text-muted-foreground">Open Cases</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <p className="text-2xl font-bold text-success">99.1%</p>
                <p className="text-sm text-muted-foreground">System Uptime</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardPageContainer>
  );
};

export default DashboardStatistics;