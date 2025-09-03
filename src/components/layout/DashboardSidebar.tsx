import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  MapPin,
  Users,
  AlertTriangle,
  FileText,
  BarChart3,
  Shield,
  Globe,
  Settings,
  Home,
} from "lucide-react";

const DashboardSidebar = () => {
  const { open, setOpen, isMobile, state, openMobile, setOpenMobile } = useSidebar();
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const handleHomeClick = () => {
    navigate('/');
    if (isMobile) setOpenMobile(false);
  };

  const menuItems = [
    {
      title: "Dashboard",
      items: [
        { name: "Overview", path: "/dashboard", icon: LayoutDashboard },
        { name: "GIS Map", path: "/dashboard/map", icon: MapPin },
      ],
    },
    {
      title: "Management",
      items: [
        { name: "Tourist Records", path: "/dashboard/tourists", icon: Users },
        { name: "Alert Management", path: "/dashboard/alerts", icon: AlertTriangle },
        { name: "E-FIR System", path: "/dashboard/efir", icon: FileText },
        { name: "Digital IDs", path: "/dashboard/digital-ids", icon: Shield },
      ],
    },
    {
      title: "Analytics",
      items: [
        { name: "Reports", path: "/dashboard/reports", icon: BarChart3 },
        { name: "Statistics", path: "/dashboard/statistics", icon: Globe },
      ],
    },
    {
      title: "System",
      items: [
        { name: "Settings", path: "/dashboard/settings", icon: Settings },
      ],
    },
  ];

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="pt-2">
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="mb-2 bg-primary/10 text-primary hover:bg-primary/20"
                onClick={handleHomeClick}
              >
                <div className="flex items-center space-x-3 px-3 py-2 rounded-md cursor-pointer">
                  <Home className="h-4 w-4 flex-shrink-0" />
                  {state !== "collapsed" && <span className="text-sm font-medium">Back to Home</span>}
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        {menuItems.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel className="text-sidebar-foreground/70">
              {state !== "collapsed" && section.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                            isActive
                              ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                              : "text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                          }`
                        }
                      >
                        <item.icon className="h-4 w-4 flex-shrink-0" />
                        {state !== "collapsed" && <span className="text-sm">{item.name}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
};

export default DashboardSidebar;