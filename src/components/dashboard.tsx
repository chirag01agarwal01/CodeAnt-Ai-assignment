
import Repositories from "./repositories";
import SidebarNavigation from "./sidebarnavigation";
import TopBarWithMenu from "./topbarmenu";

export default function Dashboard() {
  
  return (
    <>
    <div className="block md:hidden">
      <TopBarWithMenu />
    </div>
    <div className="grid md:grid-cols-8 lg:grid-cols-6 h-screen">
      <div className="hidden md:block md:col-span-2 lg:col-span-1">
        <SidebarNavigation />
      </div>
      <div className="md:col-span-6 lg:col-span-5 bg-[#f7f8fa]">
        <Repositories />
      
      </div>
      
    </div>
    </>
  );
}