import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import Header from "@/components/layout/Header";
import DataTable from "@/components/dashboard/DataTable";
import { Badge } from "@/components/ui/badge";

const DashboardEFir = () => {
  const efirData = [
    {
      id: "FIR-2024-001",
      complainant: "John Smith",
      category: "Theft",
      location: "Goa Beach Resort",
      status: "Under Investigation",
      priority: "High",
      filedDate: "2024-01-20T09:30:00",
      assignedOfficer: "Inspector Sharma"
    },
    {
      id: "FIR-2024-002",
      complainant: "Maria Garcia", 
      category: "Fraud",
      location: "Delhi Airport",
      status: "Closed",
      priority: "Medium",
      filedDate: "2024-01-19T14:20:00",
      assignedOfficer: "Inspector Patel"
    },
    {
      id: "FIR-2024-003",
      complainant: "David Wilson",
      category: "Lost Documents",
      location: "Mumbai Central",
      status: "Pending",
      priority: "Low",
      filedDate: "2024-01-18T11:15:00",
      assignedOfficer: "Inspector Singh"
    }
  ];

  const efirColumns = [
    { key: "id", label: "FIR Number" },
    { key: "complainant", label: "Complainant" },
    { key: "category", label: "Category" },
    { key: "location", label: "Location" },
    { key: "priority", label: "Priority", render: (value: string) => (
      <Badge className={
        value === "High" ? "bg-destructive text-destructive-foreground" :
        value === "Medium" ? "bg-warning text-warning-foreground" :
        "bg-secondary text-secondary-foreground"
      }>
        {value}
      </Badge>
    )},
    { key: "status", label: "Status" },
    { key: "filedDate", label: "Filed Date" },
    { key: "assignedOfficer", label: "Assigned Officer" }
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
                <h1 className="text-2xl font-bold text-foreground">E-FIR System</h1>
                <p className="text-muted-foreground">
                  Digital First Information Report management
                </p>
              </div>
              <DataTable 
                title="E-FIR Records"
                data={efirData}
                columns={efirColumns}
              />
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default DashboardEFir;