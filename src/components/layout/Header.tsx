import { Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import governmentEmblem from "@/assets/government-emblem.png";

const Header = () => {
  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिन्दी" },
    { code: "te", name: "తెలుగు" },
    { code: "ta", name: "தமிழ்" },
    { code: "bn", name: "বাংলা" },
  ];

  return (
    <header className="bg-background border-b border-border shadow-sm">
      {/* Top bar with language selector */}
      <div className="border-b border-border/50">
        <div className="container mx-auto px-4 py-2 flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-xs">
                <Globe className="h-3 w-3" />
                English
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-background border border-border">
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.code} className="text-sm">
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={governmentEmblem}
              alt="Government of India Emblem"
              className="h-16 w-16"
            />
            <div>
              <h1 className="text-xl font-bold text-government font-inter">
                YatriGuard
              </h1>
              <p className="text-sm text-muted-foreground">
                भारत सरकार | Government of India
              </p>
              <p className="text-xs text-muted-foreground font-medium">
                Tourism & Police Digital Platform
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="government-outline" size="sm">
              Login
            </Button>
            <Button variant="government" size="sm">
              Register
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;