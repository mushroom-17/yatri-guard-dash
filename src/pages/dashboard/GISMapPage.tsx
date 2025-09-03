import DashboardPageContainer from "@/components/layout/DashboardPageContainer";
import GISMap from "@/components/dashboard/GISMap";

const GISMapPage = () => {
  return (
    <DashboardPageContainer title="GIS Mapping System">
      <div className="space-y-6">
        <p className="text-muted-foreground">
          Real-time tracking of tourist locations and safety zones
        </p>
        <div className="h-[calc(100vh-200px)]">
          <GISMap />
        </div>
      </div>
    </DashboardPageContainer>
  );
};

export default GISMapPage;