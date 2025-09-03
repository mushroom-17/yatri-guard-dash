import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download, Scale, Clock, CheckCircle } from "lucide-react";
import DataTable from "@/components/dashboard/DataTable";

const EFir = () => {
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
      <Navigation />
      
      <main className="container mx-auto px-4 py-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <FileText className="h-6 w-6 text-government" />
                E-FIR Management System
              </h1>
              <p className="text-muted-foreground mt-1">
                Digital First Information Report system for tourist-related cases
              </p>
            </div>
            <Button className="bg-government hover:bg-government/90">
              <Download className="h-4 w-4 mr-2" />
              Export FIRs
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total FIRs</p>
                    <p className="text-2xl font-bold text-foreground">156</p>
                  </div>
                  <FileText className="h-8 w-8 text-government" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Under Investigation</p>
                    <p className="text-2xl font-bold text-warning">43</p>
                  </div>
                  <Scale className="h-8 w-8 text-warning" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Pending Review</p>
                    <p className="text-2xl font-bold text-destructive">28</p>
                  </div>
                  <Clock className="h-8 w-8 text-destructive" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Resolved Cases</p>
                    <p className="text-2xl font-bold text-success">85</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-success" />
                </div>
              </CardContent>
            </Card>
          </div>

          <DataTable 
            title="Recent E-FIRs"
            data={efirData}
            columns={efirColumns}
          />
        </div>
      </main>
    </div>
  );
};

export default EFir;