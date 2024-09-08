import { Menu } from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
    SheetDescription
} from "@/components/ui/sheet";
import { Sidebar } from "@/components/sidebar";

export const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-white" />
            </SheetTrigger>
            
            <SheetContent className="p-0 z-[51]" side="left">
                <Sidebar />
            </SheetContent>
        </Sheet>
    );
}