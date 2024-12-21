import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import logo2 from "@/assets/logo2.svg";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
    Cloud,
    Code2,
    HeadphonesIcon,
    HelpCircle,
    Home,
    LogOut,
    Settings,
} from "lucide-react";
const navigationItems = [
    { index: 0, icon: <Home className="w-6 h-6" />, label: "Repositories" },
    { index: 1, icon: <Code2 className="w-6 h-6" />, label: "AI Code Review" },
    { index: 2, icon: <Cloud className="w-6 h-6" />, label: "Cloud Security" },
    { index: 3, icon: <HelpCircle className="w-6 h-6" />, label: "How to Use" },
    { index: 4, icon: <Settings className="w-6 h-6" />, label: "Settings" },
    { index: 5, icon: <HeadphonesIcon className="w-6 h-6" />, label: "Support" },
    { index: 6, icon: <LogOut className="w-6 h-6" />, label: "Logout" },
];


const TopBarWithMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(0);


    return (
        <div className="relative">
            {/* Top Header */}
            <div className="flex items-center justify-between bg-white px-4 py-4 ">
                <div className="flex items-center gap-3">
                    <img className="w-[28.5px] h-8" alt="CodeAnt Logo" src={logo2} />
                    <span className="text-2xl text-[#181d27] font-normal">
                        CodeAnt AI
                    </span>
                </div>

                <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                    {/* Trigger */}
                    <SheetTrigger asChild>
                        <Button className="p-2 ">{/* Three-line menu icon */}
                            <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24.75 24.75" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2 c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2 c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z"></path> </g> </g></svg>

                        </Button>
                    </SheetTrigger>

                    {/* Menu Content */}
                    <SheetContent side="top" className="space-y-4  bg-gray-50">
                        <SheetHeader>
                            <div className="flex items-center ml-[-8px] mt-[-22px] gap-3">
                                <img className="w-[28.5px] h-8" alt="CodeAnt Logo" src={logo2} />
                                <span className="text-2xl text-[#181d27] font-normal">
                                    CodeAnt AI
                                </span>
                            </div>
                        </SheetHeader>

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

                        {/* Navigation Menu */}
                        <div className="w-full h-full grid grid-rows-5 space-y-1">
                            {navigationItems.map((item) => (
                                <div key={item.index} className="w-full">
                                    <Button
                                        variant="ghost"
                                        className={`w-full ${"text-[#414651]"
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

        
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
};

export default TopBarWithMenu;
