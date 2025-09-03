import DashboardPageContainer from "@/components/layout/DashboardPageContainer";
import DataTable from "@/components/dashboard/DataTable";
import { Badge } from "@/components/ui/badge";

const TouristRecords = () => {
  const touristData = [
    {
      id: "T-001",
      name: "John Smith",
      nationality: "USA",
      checkIn: "2024-01-15",
      checkOut: "2024-01-25", 
      location: "Goa Beach Resort",
      status: "Active",
      digitalId: "DID-2024-001"
    },
    {
      id: "T-002",
      name: "Maria Garcia",
      nationality: "Spain",
      checkIn: "2024-01-10",
      checkOut: "2024-01-20",
      location: "Completed",
      status: "Checked Out",
      digitalId: "DID-2024-003"
    },
    {
      id: "T-003",
      name: "Priya Sharma",
      nationality: "India",
      checkIn: "2024-01-20",
      checkOut: "2024-01-30",
      location: "Udaipur Palace Hotel",
      status: "Active",
      digitalId: "DID-2024-002"
    }
  ];

  const touristColumns = [
    { key: "id", label: "Tourist ID" },
    { key: "name", label: "Name" },
    { key: "nationality", label: "Nationality" },
    { key: "checkIn", label: "Check In" },
    { key: "checkOut", label: "Check Out" },
    { key: "location", label: "Current Location" },
    { key: "status", label: "Status", render: (value: string) => (
      <Badge className={
        value === "Active" ? "bg-success text-success-foreground" :
        "bg-muted text-muted-foreground"
      }>
        {value}
      </Badge>
    )},
    { key: "digitalId", label: "Digital ID" }
  ];

  return (
    <DashboardPageContainer title="Tourist Records">
      <div className="space-y-6">
        <p className="text-muted-foreground">
          Comprehensive database of registered tourists
        </p>
        <DataTable 
          title="All Tourist Records"
          data={touristData}
          columns={touristColumns}
        />
      </div>
    </DashboardPageContainer>
  );
};

export default TouristRecords;