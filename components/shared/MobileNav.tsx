import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "../ui/separator"
import NavItems from "./NavItems"


const MobileNav = () => {
    return (
        <nav className="md:hidden">
            <Sheet>
                <SheetTrigger className="align-middle">
                    <Image className="cursor-pointer" src="/assets/icons/menu.svg" width={24} height={24} alt="menu" />
                </SheetTrigger>
                <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
                    <Image className="cursor-pointer" src="/assets/images/logo.svg" width={128} height={38} alt="logo" />
                    <Separator className="border border-gray-50" />
                    <NavItems/>
                </SheetContent>
            </Sheet>


        </nav>
    )
}

export default MobileNav