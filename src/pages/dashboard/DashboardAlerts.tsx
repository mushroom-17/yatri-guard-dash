import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import Header from "@/components/layout/Header";
import DataTable from "@/components/dashboard/DataTable";
import { Badge } from "@/components/ui/badge";

const DashboardAlerts = () => {
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
    { key: "timestamp", label: "Reported" },
    { key: "reportedBy", label: "Reported By" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SidebarProvider>
        <div className="flex">
          <DashboardSidebar />
          <main className="flex-1 p-6">
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-foreground">Alert Management</h1>
                <p className="text-muted-foreground">
                  Monitor and manage all tourist safety alerts
                </p>
              </div>
              <DataTable 
                title="Active Alerts"
                data={alertsData}
                columns={alertColumns}
              />
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default DashboardAlerts;