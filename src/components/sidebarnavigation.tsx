import { Button } from "@/components/ui/button";
import logo2 from "@/assets/logo2.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Cloud,
  Code2,
  HeadphonesIcon,
  HelpCircle,
  Home,
  LogOut,
  Settings,
} from "lucide-react";
import { useState } from "react";

const navigationItems = [
  { index: 0, icon: <Home className="w-6 h-6" />, label: "Repositories" },
  { index: 1, icon: <Code2 className="w-6 h-6" />, label: "AI Code Review" },
  { index: 2, icon: <Cloud className="w-6 h-6" />, label: "Cloud Security" },
  { index: 3, icon: <HelpCircle className="w-6 h-6" />, label: "How to Use" },
  { index: 4, icon: <Settings className="w-6 h-6" />, label: "Settings" },
];

const footerItems = [
  { icon: <HeadphonesIcon className="w-6 h-6" />, label: "Support" },
  { icon: <LogOut className="w-6 h-6" />, label: "Logout" },
];

export default function SidebarNavigation() {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className="flex w-full h-full bg-white border-r border-[#e9e9eb]">
      {/* Sidebar Container */}
      <div className="flex flex-col justify-between w-full px-4">
        {/* Header Section */}
        <div className="flex flex-col gap-6 pt-8 w-full">
          <header className="flex flex-col gap-8 w-full items-start">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img className="w-[28.5px] h-8" alt="CodeAnt Logo" src={logo2} />
              <span className="text-2xl text-[#181d27] font-normal">
                CodeAnt AI
              </span>
            </div>

            {/* User Selector */}
            <Select defaultValue="ChiragAgarwal" >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select user" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem className="text-ellipsis overflow-hidden" value="ChiragAgarwal">
                  ChiragAgarwal
                </SelectItem>
              </SelectContent>
            </Select>
          </header>

          {/* Navigation Menu */}
          <div className="w-full h-full grid grid-rows-5 space-y-1">
            {navigationItems.map((item) => (
                <div key={item.index} className="w-full">
                  <Button
                    variant={activeItem === item.index ? "default" : "ghost"}
                    className={`w-full ${
                      activeItem === item.index
                        ? "bg-[#156fee] text-white hover:bg-[#156fee]"
                        : "text-[#414651]"
                    }`}
                    onClick={() => setActiveItem(item.index)}
                  >
                    {item.icon}
                    <span className="w-full text-left font-semibold">
                      {item.label}
                    </span>
                  </Button>
                </div>
              ))}
            </div>
        </div>

        {/* Footer Section */}
        <footer className="pb-8 w-full">
          <div className="w-full">
            <div className="w-full grid grid-rows-2 space-y-1">
              {footerItems.map((item) => (
                <div key={item.label} className="w-full">
                  <Button variant="ghost" className="w-full">
                    {item.icon}
                    <span className="w-full text-left font-semibold text-[#414651]">
                      {item.label}
                    </span>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}