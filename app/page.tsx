"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [view, setView] = useState<"menu" | "calendar" | "blog" | null>(null);
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-slate-50">
      {/* 背景 */}
      <Image
        src="/top.png"
        alt="shisha lounge"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />

      {/* 斜め帯メニュー（傾きは今回、ずれ方向は前回、量だけ増やす） */}
      <nav className="absolute inset-y-0 left-0 flex items-start pt-20 pl-8 sm:pl-14">
        <div className="flex flex-col gap-8">

          {[
            {
              href: "/menu",
              title: "SHISHA / DRINK",
              label: "メニュー",
              color: "bg-slate-900/55 ring-slate-500/70 text-slate-50",
              offset: "sm:ml-0",
              glowClass: "menu-glow",
            },
            {
              href: "/calendar",
              title: "OPEN DAYS",
              label: "開店日カレンダー",
              color: "bg-slate-900/55 ring-emerald-300/70 text-slate-50",
              offset: "sm:ml-10",  // ← 前回方向 + ずれ量UP
              glowClass: "menu-glow",
            },
            {
              href: "/reserve",
              title: "RESERVE",
              label: "席のご予約",
              color: "bg-slate-900/55 ring-emerald-300 text-slate-50",
              offset: "sm:ml-20", // ← さらに右へ
              glowClass: "menu-glow",
            },
            {
              href: "/blog",
              title: "DIARY",
              label: "ブログ / お知らせ",
              color: "bg-slate-900/55 ring-fuchsia-400/70 text-slate-50",
              offset: "sm:ml-30", // ← 一番右へ
              glowClass: "menu-glow",
            },
          ].map((item) => (
            <button
              key={item.href}
              onClick={() => {
                if (item.href === "/menu") setView("menu");
                else if (item.href === "/calendar") setView("calendar");
                else if (item.href === "/blog") setView("blog");
                // reserveはまだない
              }}
              className={`group relative block w-82.5 sm:w-110 ${item.offset} cursor-pointer text-left z-10`}
            >
              <div
                className={`
                  flex items-center justify-between px-6 py-5 font-medium fantasy-font
                  backdrop-blur-sm ring-1 transition
                  group-hover:bg-emerald-900/90 group-hover:ring-slate-300
                  ${item.color}
                  ${item.glowClass}
                `}
                style={{
                  // ← 傾きは今回の「逆向き平行四辺形」
                  clipPath: "polygon(0 0, 92% 0, 100% 100%, 8% 100%)",
                }}
              >
                <div className="flex flex-col">
                  <span className="text-[0.7rem] tracking-[0.18em] text-slate-300 uppercase">
                    {item.title}
                  </span>
                  <span className="text-lg">{item.label}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </nav>


      {/* 右側テキスト / メニュー */}
      <section className="absolute inset-0 flex items-center justify-end px-6">
        {view === null ? (
          <div className="ml-64 max-w-xl space-y-3 text-right drop-shadow-[0_3px_6px_rgba(0,0,0,0.85)]">
            <p className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-200">
              OTHERWORLDLY SHISHA LOUNGE
            </p>
            <h1 className="text-2xl font-semibold md:text-3xl leading-snug fantasy-font">
              異形頭水煙館
            </h1>
            <p className="text-xs md:text-sm text-slate-100">
              説明文
            </p>
          </div>
        ) : view === "menu" ? (
          <div className="ml-64 max-w-xl space-y-3 text-right drop-shadow-[0_3px_6px_rgba(0,0,0,0.85)] bg-slate-900/80 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">SHISHA / DRINK MENU</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Shisha Flavors</h3>
                <ul className="text-sm space-y-1">
                  <li>Apple - ¥500</li>
                  <li>Grape - ¥500</li>
                  <li>Mint - ¥500</li>
                  <li>Mixed Berry - ¥600</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Drinks</h3>
                <ul className="text-sm space-y-1">
                  <li>Cola - ¥300</li>
                  <li>Orange Juice - ¥400</li>
                  <li>Water - ¥200</li>
                </ul>
              </div>
            </div>
            <button
              onClick={() => setView(null)}
              className="mt-4 px-4 py-2 bg-slate-700 rounded"
            >
              閉じる
            </button>
          </div>
        ) : (
          <div className="ml-64 max-w-xl space-y-3 text-right drop-shadow-[0_3px_6px_rgba(0,0,0,0.85)]">
            <p>他のコンテンツ（{view}）</p>
          </div>
        )}
      </section>

      {/* 下のロゴ */}
      <header className="absolute inset-x-0 bottom-4 flex justify-center px-4">
        <Image
          src="/logo.png"
          alt="Shisha Lounge Logo"
          width={300}
          height={120}
          className="object-contain drop-shadow-lg"
        />
      </header>

      {/* メニュー表示 */}
      {view && view !== "menu" && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-10">
          <div className="bg-slate-900 p-8 rounded-lg max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-4">{view === "calendar" ? "カレンダー" : "ブログ"}</h2>
            <p>ここに{view}内容を表示します。</p>
            <button
              onClick={() => setView(null)}
              className="mt-4 px-4 py-2 bg-slate-700 rounded"
            >
              閉じる
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
