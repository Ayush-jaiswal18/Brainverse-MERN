import type { ReactElement } from "react";

export function SidebarItem({ text, icon }: {
    text: string,
    icon: ReactElement
    className?: string
}) {
    return <div className="flex items-center gap-3 text-gray-600 py-2 cursor-pointer hover:bg-gray-100 w-full rounded-md px-2 max-w-50 pl-4 transition-all duration-300">
        {icon}{text}
    </div>
}