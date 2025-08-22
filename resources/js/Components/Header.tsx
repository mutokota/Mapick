import type { FC } from "react";

interface HeaderProps {
    userName: string;
}

const Header: FC<HeaderProps> = ({ userName }) => {
    return (
        <header className="w-full bg-sky-300/80 backdrop-blur border-b border-sky-200">
            <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="text-3xl font-black tracking-tight text-sky-900">
                        TIME<span className="ml-1 text-sky-700">LINK</span>
                    </div>
                </div>
                <div className="text-sm text-neutral-700">名前:{userName}</div>
            </div>
        </header>
    );
};

export default Header;
