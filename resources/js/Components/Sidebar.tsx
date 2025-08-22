import type { FC } from "react";

const items = [
    "社員情報",
    "申請承認",
    "企業情報",
    "登録社員一覧",
    "登録企業一覧",
    "マニュアル／ヘルプ",
    "お問い合わせ",
];

const Sidebar: FC = () => {
    return (
        <aside className="w-56 shrink-0 bg-white border-r border-neutral-200 self-start h-[calc(100vh-5rem)]">
            {/* 画面の残り高さに合わせて7分割 */}
            <nav className="h-full flex flex-col">
                {items.map((label) => (
                    <a
                        key={label}
                        href="#"
                        className="flex-1 flex items-center justify-center border-b border-neutral-200 text-neutral-700 hover:text-sky-700 hover:bg-sky-50"
                    >
                        {label} ＞
                    </a>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
