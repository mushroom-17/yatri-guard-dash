import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import Header from "@/components/layout/Header";
import GISMap from "@/components/dashboard/GISMap";

const GISMapPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SidebarProvider>
        <div className="flex">
          <DashboardSidebar />
          <main className="flex-1 p-6">
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-foreground">GIS Mapping System</h1>
                <p className="text-muted-foreground">
                  Real-time tracking of tourist locations and safety zones
                </p>
              </div>
              <div className="h-[calc(100vh-200px)]">
                <GISMap />
              </div>
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default GISMapPage;