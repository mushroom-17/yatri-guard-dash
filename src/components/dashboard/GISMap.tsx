import { MapPin, Users, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GISMap = () => {
  // Mock data for tourist clusters and high-risk zones
  const touristClusters = [
    { id: 1, name: "Red Fort Area", tourists: 245, x: 30, y: 40 },
    { id: 2, name: "India Gate", tourists: 189, x: 60, y: 30 },
    { id: 3, name: "Lotus Temple", tourists: 156, x: 70, y: 60 },
    { id: 4, name: "Qutub Minar", tourists: 98, x: 20, y: 70 },
  ];

  const highRiskZones = [
    { id: 1, name: "Zone A", risk: "High", x: 45, y: 25 },
    { id: 2, name: "Zone B", risk: "Medium", x: 80, y: 45 },
    { id: 3, name: "Zone C", risk: "High", x: 15, y: 80 },
  ];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <MapPin className="h-5 w-5 text-primary" />
          <span>Real-time GIS Map</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative bg-muted/20 h-96 overflow-hidden rounded-b-lg">
          {/* Map Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-muted to-primary-muted opacity-50"></div>
          
          {/* Tourist Clusters */}
          {touristClusters.map((cluster) => (
            <div
              key={cluster.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ left: `${cluster.x}%`, top: `${cluster.y}%` }}
            >
              <div className="relative">
                <div className="bg-success p-2 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                  <Users className="h-4 w-4 text-success-foreground" />
                </div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-background px-2 py-1 rounded text-xs font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {cluster.name}: {cluster.tourists} tourists
                </div>
              </div>
            </div>
          ))}

          {/* High-Risk Zones */}
          {highRiskZones.map((zone) => (
            <div
              key={zone.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ left: `${zone.x}%`, top: `${zone.y}%` }}
            >
              <div className="relative">
                <div className={`p-2 rounded-full shadow-lg group-hover:scale-110 transition-transform ${
                  zone.risk === "High" ? "bg-destructive" : "bg-warning"
                }`}>
                  <AlertTriangle className={`h-4 w-4 ${
                    zone.risk === "High" ? "text-destructive-foreground" : "text-warning-foreground"
                  }`} />
                </div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-background px-2 py-1 rounded text-xs font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {zone.name}: {zone.risk} Risk
                </div>
              </div>
            </div>
          ))}

          {/* Map Legend */}
          <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm p-3 rounded-lg shadow-lg">
            <h4 className="text-xs font-semibold mb-2">Legend</h4>
            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-xs">
                <div className="w-3 h-3 bg-success rounded-full"></div>
                <span>Tourist Clusters</span>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <div className="w-3 h-3 bg-destructive rounded-full"></div>
                <span>High Risk Zones</span>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <div className="w-3 h-3 bg-warning rounded-full"></div>
                <span>Medium Risk Zones</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GISMap;