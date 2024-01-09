import { LucideIcon } from 'lucide-react';
import React from 'react';
import {usePathname , useRouter} from "next/navigation";
import { cn } from '@/lib/utils';

interface SidebarItemsProps {
    icon: LucideIcon;
    label: string;
    href: string;
};

const SidebarItem = ({
    icon: Icon,
    label,
    href
}: SidebarItemsProps) => {
    //Custom hooks
    const pathname = usePathname();
    const router = useRouter();

//Let understand this three case --> 
//* !.) One is for checking is we on the route page
//* 2.) Second one checks if we are on the exact same page
//* 3.) Thrid one checks if it parent path is of this specific page

    const isActive = 
    (pathname === "/" && href === "/") || 
    pathname === href || 
    pathname?. startsWith(`${href}/`);


    const onClick = () => {
        router.push(href);
    }

  return (
    <button onClick={onClick} type='button' className={cn("flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
    isActive && "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700")}>
        <div className='flex items-center gap-x-2 py-4'>
            <Icon size={20} className={cn("text-slate-500", isActive && "text-sky-700")}/>
            {label}
        </div>


        <div  className={cn("ml-auto opacity-0 border-2 border-sky-700 h-full", isActive && "opacity-100")}
        />
    </button>
  )
}

export default SidebarItem