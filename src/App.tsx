import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import DigitalIds from "./pages/DigitalIds";
import Alerts from "./pages/Alerts";
import EFir from "./pages/EFir";
import Reports from "./pages/Reports";
import Contact from "./pages/Contact";
import GISMapPage from "./pages/dashboard/GISMapPage";
import TouristRecords from "./pages/dashboard/TouristRecords";
import DashboardAlerts from "./pages/dashboard/DashboardAlerts";
import DashboardEFir from "./pages/dashboard/DashboardEFir";
import DashboardDigitalIds from "./pages/dashboard/DashboardDigitalIds";
import DashboardReports from "./pages/dashboard/DashboardReports";
import DashboardStatistics from "./pages/dashboard/DashboardStatistics";
import DashboardSettings from "./pages/dashboard/DashboardSettings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/map" element={<GISMapPage />} />
          <Route path="/dashboard/tourists" element={<TouristRecords />} />
          <Route path="/dashboard/alerts" element={<DashboardAlerts />} />
          <Route path="/dashboard/efir" element={<DashboardEFir />} />
          <Route path="/dashboard/digital-ids" element={<DashboardDigitalIds />} />
          <Route path="/dashboard/reports" element={<DashboardReports />} />
          <Route path="/dashboard/statistics" element={<DashboardStatistics />} />
          <Route path="/dashboard/settings" element={<DashboardSettings />} />
          <Route path="/digital-ids" element={<DigitalIds />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/e-fir" element={<EFir />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
