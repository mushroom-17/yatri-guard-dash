import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Digital IDs", path: "/digital-ids" },
    { name: "Alerts", path: "/alerts" },
    { name: "E-FIR", path: "/e-fir" },
    { name: "Reports", path: "/reports" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-government shadow-government">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          <div className="flex space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-2 text-sm font-medium transition-colors rounded-sm",
                    isActive
                      ? "bg-government-foreground/20 text-government-foreground"
                      : "text-government-foreground/80 hover:text-government-foreground hover:bg-government-foreground/10"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;