import DashboardPageContainer from "@/components/layout/DashboardPageContainer";
import DataTable from "@/components/dashboard/DataTable";
import { Badge } from "@/components/ui/badge";

const DashboardDigitalIds = () => {
  const digitalIds = [
    {
      id: "DID-2024-001",
      touristName: "John Smith",
      nationality: "USA",
      kycType: "Passport",
      kycNumber: "US123456789",
      checkIn: "2024-01-15",
      checkOut: "2024-01-25",
      currentLocation: "Goa Beach Resort",
      status: "Active",
      blockchain: "0x1234...5678"
    },
    {
      id: "DID-2024-002",
      touristName: "Priya Sharma",
      nationality: "India",
      kycType: "Aadhaar",
      kycNumber: "XXXX-XXXX-1234",
      checkIn: "2024-01-20",
      checkOut: "2024-01-30",
      currentLocation: "Udaipur Palace Hotel",
      status: "Active",
      blockchain: "0x5678...9012"
    },
    {
      id: "DID-2024-003",
      touristName: "Maria Garcia",
      nationality: "Spain",
      kycType: "Passport",
      kycNumber: "ES987654321",
      checkIn: "2024-01-10",
      checkOut: "2024-01-20",
      currentLocation: "Completed",
      status: "Expired",
      blockchain: "0x9012...3456"
    }
  ];

  const digitalIdColumns = [
    { key: "id", label: "Digital ID" },
    { key: "touristName", label: "Tourist Name" },
    { key: "nationality", label: "Nationality" },
    { key: "kycType", label: "KYC Type" },
    { key: "kycNumber", label: "KYC Number" },
    { key: "checkIn", label: "Check In" },
    { key: "checkOut", label: "Check Out" },
    { key: "currentLocation", label: "Current Location" },
    { key: "status", label: "Status", render: (value: string) => (
      <Badge className={
        value === "Active" ? "bg-success text-success-foreground" :
        value === "Expired" ? "bg-muted text-muted-foreground" :
        "bg-destructive text-destructive-foreground"
      }>
        {value}
      </Badge>
    )},
    { key: "blockchain", label: "Blockchain Hash" }
  ];

  return (
    <DashboardPageContainer title="Digital ID Management">
      <div className="space-y-6">
        <p className="text-muted-foreground">
          Blockchain-based secure digital identification system
        </p>
        <DataTable 
          title="Digital ID Records"
          data={digitalIds}
          columns={digitalIdColumns}
        />
      </div>
    </DashboardPageContainer>
  );
};

export default DashboardDigitalIds;