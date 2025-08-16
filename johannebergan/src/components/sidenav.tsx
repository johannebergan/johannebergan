"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export type NavItem = {
    title: string,
    path: string
}

interface SideNavProps {
    items: NavItem[]
} 

export default function SideNav({items}: SideNavProps){
    const pathname = usePathname();

    
    return(
        <nav>
            <ul className="flex flex-col gap-2">
                {items.map(({ title, path }) => {
                const active = pathname === path;
                return (
                    <li key={path}>
                    <Link
                        href={path}
                        className={`flex items-center gap-2 rounded px-3 py-2 transition
                        ${active ? "bg-zinc-900 text-white" : "text-zinc-700 hover:bg-zinc-100"}
                        `}
                    >
                
                        <span>{title}</span>
                    </Link>
                    </li>
                );
                })}
            </ul>
        </nav>
    )

}