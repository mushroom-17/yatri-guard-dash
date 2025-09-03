import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import StatCard from "@/components/dashboard/StatCard";
import GISMap from "@/components/dashboard/GISMap";
import DataTable from "@/components/dashboard/DataTable";
import { Users, AlertTriangle, UserX, CheckCircle } from "lucide-react";

const Dashboard = () => {
  // Mock data for demonstration
  const alertHistory = [
    {
      id: "ALT001",
      type: "Security",
      location: "Red Fort",
      severity: "Critical",
      status: "Open",
      reportedBy: "Officer Kumar",
      createdDate: "2024-01-15",
    },
    {
      id: "ALT002",
      type: "Medical",
      location: "India Gate",
      severity: "Medium",
      status: "Resolved",
      reportedBy: "Dr. Sharma",
      createdDate: "2024-01-14",
    },
    {
      id: "ALT003",
      type: "Lost Tourist",
      location: "Lotus Temple",
      severity: "High",
      status: "Pending",
      reportedBy: "Guide Services",
      createdDate: "2024-01-14",
    },
  ];

  const touristRecords = [
    {
      id: "T001",
      name: "John Smith",
      nationality: "USA",
      digitalId: "DID123456",
      location: "Red Fort Area",
      status: "Active",
      checkInDate: "2024-01-10",
    },
    {
      id: "T002",
      name: "Maria Garcia",
      nationality: "Spain",
      digitalId: "DID789012",
      location: "India Gate",
      status: "Active",
      checkInDate: "2024-01-12",
    },
    {
      id: "T003",
      name: "Tanaka Hiroshi",
      nationality: "Japan",
      digitalId: "DID345678",
      location: "Qutub Minar",
      status: "Active",
      checkInDate: "2024-01-13",
    },
  ];

  const efirRecords = [
    {
      firNo: "FIR001/2024",
      complainant: "Tourist Support",
      incidentType: "Theft",
      location: "Chandni Chowk",
      status: "Open",
      filingDate: "2024-01-15",
    },
    {
      firNo: "FIR002/2024",
      complainant: "Hotel Manager",
      incidentType: "Fraud",
      location: "Connaught Place",
      status: "Closed",
      filingDate: "2024-01-13",
    },
  ];

  const alertColumns = [
    { key: "id", label: "Alert ID" },
    { key: "type", label: "Type" },
    { key: "location", label: "Location" },
    { key: "severity", label: "Severity" },
    { key: "status", label: "Status" },
    { key: "reportedBy", label: "Reported By" },
    { key: "createdDate", label: "Date" },
  ];

  const touristColumns = [
    { key: "id", label: "Tourist ID" },
    { key: "name", label: "Name" },
    { key: "nationality", label: "Nationality" },
    { key: "digitalId", label: "Digital ID" },
    { key: "location", label: "Current Location" },
    { key: "status", label: "Status" },
    { key: "checkInDate", label: "Check-in Date" },
  ];

  const efirColumns = [
    { key: "firNo", label: "FIR Number" },
    { key: "complainant", label: "Complainant" },
    { key: "incidentType", label: "Incident Type" },
    { key: "location", label: "Location" },
    { key: "status", label: "Status" },
    { key: "filingDate", label: "Filing Date" },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar />
        
        <main className="flex-1 overflow-auto">
          {/* Header */}
          <header className="border-b border-border bg-background/95 backdrop-blur-md sticky top-0 z-40">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center space-x-4">
                <SidebarTrigger />
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Dashboard Overview</h1>
                  <p className="text-sm text-muted-foreground">Real-time tourism and security monitoring</p>
                </div>
              </div>
            </div>
          </header>

          <div className="p-6 space-y-6">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Active Tourists"
                value="2,847"
                icon={Users}
                trend={{ value: 12, isPositive: true }}
                variant="success"
              />
              <StatCard
                title="Open Alerts"
                value="23"
                icon={AlertTriangle}
                trend={{ value: 5, isPositive: false }}
                variant="warning"
              />
              <StatCard
                title="Missing Cases"
                value="3"
                icon={UserX}
                trend={{ value: 1, isPositive: false }}
                variant="destructive"
              />
              <StatCard
                title="Resolved Cases"
                value="187"
                icon={CheckCircle}
                trend={{ value: 8, isPositive: true }}
                variant="success"
              />
            </div>

            {/* GIS Map */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <GISMap />
              </div>
              
              {/* Quick Info Panel */}
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-4 shadow-card">
                  <h3 className="font-semibold text-foreground mb-3">System Status</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Database</span>
                      <span className="text-sm text-success font-medium">Online</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">GPS Tracking</span>
                      <span className="text-sm text-success font-medium">Active</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Alert System</span>
                      <span className="text-sm text-success font-medium">Running</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card border border-border rounded-lg p-4 shadow-card">
                  <h3 className="font-semibold text-foreground mb-3">Today's Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">New Check-ins</span>
                      <span className="text-sm font-medium">127</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Alerts Resolved</span>
                      <span className="text-sm font-medium">18</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">E-FIRs Filed</span>
                      <span className="text-sm font-medium">8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Tables */}
            <div className="space-y-6">
              <DataTable
                title="Alert History"
                data={alertHistory}
                columns={alertColumns}
              />
              
              <DataTable
                title="Tourist Records"
                data={touristRecords}
                columns={touristColumns}
              />
              
              <DataTable
                title="E-FIR Records"
                data={efirRecords}
                columns={efirColumns}
              />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;