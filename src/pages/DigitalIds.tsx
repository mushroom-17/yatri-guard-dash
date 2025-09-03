import { useState } from "react";
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Download, Eye, Shield, MapPin, Calendar, Phone } from "lucide-react";

const DigitalIds = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Mock data for digital IDs
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
      emergencyContact: "+1-555-0123",
      status: "Active",
      blockchain: "0x1234...5678",
      itinerary: ["Goa", "Kerala", "Mumbai"]
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
      emergencyContact: "+91-98765-43210",
      status: "Active",
      blockchain: "0x5678...9012",
      itinerary: ["Rajasthan", "Delhi", "Agra"]
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
      emergencyContact: "+34-123-456-789",
      status: "Expired",
      blockchain: "0x9012...3456",
      itinerary: ["Tamil Nadu", "Karnataka", "Goa"]
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      "Active": "bg-success text-success-foreground",
      "Expired": "bg-muted text-muted-foreground",
      "Suspended": "bg-destructive text-destructive-foreground",
    };
    
    return (
      <Badge className={statusConfig[status as keyof typeof statusConfig] || "bg-muted text-muted-foreground"}>
        {status}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-6">
        <div className="space-y-6">
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Shield className="h-6 w-6 text-government" />
                Digital ID Management
              </h1>
              <p className="text-muted-foreground mt-1">
                Blockchain-based secure digital identification system for tourists
              </p>
            </div>
            <Button className="bg-government hover:bg-government/90">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total IDs Issued</p>
                    <p className="text-2xl font-bold text-foreground">1,247</p>
                  </div>
                  <Shield className="h-8 w-8 text-government" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Active IDs</p>
                    <p className="text-2xl font-bold text-success">856</p>
                  </div>
                  <MapPin className="h-8 w-8 text-success" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Expired IDs</p>
                    <p className="text-2xl font-bold text-warning">391</p>
                  </div>
                  <Calendar className="h-8 w-8 text-warning" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Emergency Alerts</p>
                    <p className="text-2xl font-bold text-destructive">12</p>
                  </div>
                  <Phone className="h-8 w-8 text-destructive" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card>
            <CardHeader>
              <CardTitle>Filter Digital IDs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name, ID, or passport..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="expired">Expired</SelectItem>
                    <SelectItem value="suspended">Suspended</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by nationality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Countries</SelectItem>
                    <SelectItem value="usa">USA</SelectItem>
                    <SelectItem value="uk">UK</SelectItem>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="spain">Spain</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Digital IDs Table */}
          <Card>
            <CardHeader>
              <CardTitle>Registered Digital IDs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Digital ID</TableHead>
                      <TableHead>Tourist Details</TableHead>
                      <TableHead>KYC Information</TableHead>
                      <TableHead>Travel Period</TableHead>
                      <TableHead>Current Location</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {digitalIds.map((record) => (
                      <TableRow key={record.id}>
                        <TableCell>
                          <div className="space-y-1">
                            <p className="font-medium text-foreground">{record.id}</p>
                            <p className="text-xs text-muted-foreground font-mono">
                              {record.blockchain}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <p className="font-medium text-foreground">{record.touristName}</p>
                            <p className="text-sm text-muted-foreground">{record.nationality}</p>
                            <p className="text-xs text-muted-foreground">{record.emergencyContact}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <p className="text-sm font-medium">{record.kycType}</p>
                            <p className="text-xs text-muted-foreground">{record.kycNumber}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <p className="text-sm">
                              {new Date(record.checkIn).toLocaleDateString("en-IN")}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              to {new Date(record.checkOut).toLocaleDateString("en-IN")}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <p className="text-sm">{record.currentLocation}</p>
                            <p className="text-xs text-muted-foreground">
                              Itinerary: {record.itinerary.join(" → ")}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          {getStatusBadge(record.status)}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default DigitalIds;