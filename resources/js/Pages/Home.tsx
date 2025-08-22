import type { FC } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

interface AlertItem {
    id: string;
    date: string; // 例: 2025/05/31
    employee: string; // 例: 田中太郎
    message: string; // 赤文字本文
    typeLabel: string; // 種別: エラー
}

const mockAlerts: AlertItem[] = [
    {
        id: "1",
        date: "2025/05/31",
        employee: "田中太郎",
        message:
            "労働開始予定時刻(09:00)より前に出勤しています。打刻を修正するか早出申請(00:30以上)をしてください",
        typeLabel: "エラー",
    },
    {
        id: "2",
        date: "2025/05/31",
        employee: "山田花子",
        message:
            "労働開始予定時刻(09:00)より前に出勤しています。打刻を修正するか早出申請(00:30以上)をしてください",
        typeLabel: "エラー",
    },
    {
        id: "3",
        date: "2025/05/31",
        employee: "斎藤結樹",
        message:
            "労働開始予定時刻(09:00)より前に出勤しています。打刻を修正するか早出申請(00:30以上)をしてください",
        typeLabel: "エラー",
    },
];

const Home: FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header userName="田中太郎" />

            <div className="w-full max-w-7xl md:px-6 flex gap-6">
                {/* サイドバー */}
                <Sidebar />

                {/* メイン */}

                <main className="flex-1">
                    <div className="grid grid-cols-5 gap-6">
                        {/* 左カラム（アラート＋お知らせを縦積み） */}
                        <div className="col-span-3 flex flex-col gap-6">
                            {/* アラート通知 */}
                            <section className="bg-white border border-neutral-200 rounded-2xl p-5">
                                <div className="flex items-baseline justify-between">
                                    <h2 className="text-lg font-semibold">
                                        アラート通知({mockAlerts.length}件)
                                    </h2>
                                </div>
                                <div className="mt-4 space-y-4">
                                    {mockAlerts.map((a) => (
                                        <div
                                            key={a.id}
                                            className="rounded-xl border border-neutral-200 p-4"
                                        >
                                            <div className="text-sm text-neutral-600">
                                                打刻日：{a.date}　従業員名　
                                                {a.employee}
                                            </div>
                                            <div className="mt-1 text-sm text-red-600 leading-relaxed">
                                                {a.message}
                                            </div>
                                            <div className="mt-1 text-sm text-neutral-600">
                                                種別：{a.typeLabel}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 text-center">
                                    <a
                                        href="#"
                                        className="text-sky-600 font-medium"
                                    >
                                        一覧を見る ＞
                                    </a>
                                </div>
                            </section>

                            {/* お知らせ・承認待ちリスト */}
                            <section className="bg-white border border-neutral-200 rounded-2xl p-5">
                                <h2 className="text-lg font-semibold">
                                    お知らせ・承認待ちリスト(0件)
                                </h2>
                                <ul className="mt-4 space-y-2 text-sm">
                                    <li>
                                        ・田中太郎　
                                        <span className="text-red-600">
                                            残業申請　1件
                                        </span>
                                    </li>
                                    <li>
                                        ・山田花子　
                                        <span className="text-red-600">
                                            有給申請待ち　1件
                                        </span>
                                    </li>
                                    <li>
                                        ・斎藤結樹　
                                        <span className="text-red-600">
                                            振休申請　1件
                                        </span>
                                    </li>
                                </ul>
                                <div className="mt-4 text-center">
                                    <a
                                        href="#"
                                        className="text-sky-600 font-medium"
                                    >
                                        一覧を見る ＞
                                    </a>
                                </div>
                            </section>
                        </div>

                        {/* 右カラム（通知） */}
                        <div className="col-span-2">
                            <section className="bg-white border border-neutral-200 rounded-2xl p-5">
                                <h2 className="text-lg font-semibold">
                                    通知(0件)
                                </h2>
                                <div className="mt-4 space-y-3">
                                    <div className="border border-neutral-200 rounded-lg p-3 text-sm text-neutral-600">
                                        通知サンプル 1
                                    </div>
                                    <div className="border border-neutral-200 rounded-lg p-3 text-sm text-neutral-600">
                                        通知サンプル 2
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Home;
