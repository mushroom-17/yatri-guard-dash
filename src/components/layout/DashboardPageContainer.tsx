import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import { Menu } from "lucide-react";

interface DashboardPageContainerProps {
  title?: string;
  children: ReactNode;
}

const DashboardPageContainer = ({ title = "Dashboard", children }: DashboardPageContainerProps) => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen bg-background flex">
        <DashboardSidebar />

        <SidebarInset>
          {/* Header */}
          <header className="bg-white border-b border-gray-200 h-14 flex items-center px-4">
            <div className="flex items-center space-x-4">
              <SidebarTrigger className="md:hidden">
                <Menu className="h-5 w-5" />
              </SidebarTrigger>
              <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default DashboardPageContainer;
