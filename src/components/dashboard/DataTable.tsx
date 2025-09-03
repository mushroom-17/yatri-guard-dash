import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Download } from "lucide-react";

interface DataTableProps {
  title: string;
  data: any[];
  columns: {
    key: string;
    label: string;
    render?: (value: any, row: any) => React.ReactNode;
  }[];
}

const DataTable = ({ title, data, columns }: DataTableProps) => {
  const getStatusBadge = (status: string) => {
    const statusConfig = {
      "Active": { variant: "default" as const, className: "bg-success text-success-foreground" },
      "Pending": { variant: "secondary" as const, className: "bg-warning text-warning-foreground" },
      "Resolved": { variant: "outline" as const, className: "bg-muted text-muted-foreground" },
      "Critical": { variant: "destructive" as const, className: "" },
      "Open": { variant: "destructive" as const, className: "bg-destructive text-destructive-foreground" },
      "Closed": { variant: "outline" as const, className: "bg-muted text-muted-foreground" },
    };

    const config = statusConfig[status as keyof typeof statusConfig] || { variant: "default" as const, className: "" };
    
    return (
      <Badge variant={config.variant} className={config.className}>
        {status}
      </Badge>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((column) => (
                  <TableHead key={column.key} className="font-medium">
                    {column.label}
                  </TableHead>
                ))}
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={columns.length + 1} className="text-center py-6 text-muted-foreground">
                    No data available
                  </TableCell>
                </TableRow>
              ) : (
                data.map((row, index) => (
                  <TableRow key={index}>
                    {columns.map((column) => (
                      <TableCell key={column.key}>
                        {column.render ? (
                          column.render(row[column.key], row)
                        ) : column.key === "status" ? (
                          getStatusBadge(row[column.key])
                        ) : column.key.includes("date") || column.key.includes("Date") ? (
                          formatDate(row[column.key])
                        ) : (
                          row[column.key]
                        )}
                      </TableCell>
                    ))}
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataTable;