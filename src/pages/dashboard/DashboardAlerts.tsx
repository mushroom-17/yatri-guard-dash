import DashboardPageContainer from "@/components/layout/DashboardPageContainer";
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
    <DashboardPageContainer title="Alert Management">
      <div className="space-y-6">
        <p className="text-muted-foreground">
          Monitor and manage all tourist safety alerts
        </p>
        <DataTable 
          title="Active Alerts"
          data={alertsData}
          columns={alertColumns}
        />
      </div>
    </DashboardPageContainer>
  );
};

export default DashboardAlerts;