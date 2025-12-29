import Image from "next/image";

export default function Home() {
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
          <span className="ml-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-slate-200">
            MENU
          </span>

          {[
            {
              href: "/menu",
              title: "SHISHA / DRINK",
              label: "メニュー",
              icon: "◆",
              color: "bg-slate-900/55 ring-slate-500/70 text-slate-50",
              offset: "sm:ml-0",
            },
            {
              href: "/calendar",
              title: "OPEN DAYS",
              label: "開店日カレンダー",
              icon: "⟳",
              color: "bg-slate-900/55 ring-emerald-300/70 text-slate-50",
              offset: "sm:ml-10",  // ← 前回方向 + ずれ量UP
            },
            {
              href: "/reserve",
              title: "RESERVE",
              label: "席のご予約",
              icon: "✉",
              color:
                "bg-slate-900/55 ring-emerald-300 text-slate-50 group-hover:shadow-[0_0_28px_rgba(16,185,129,0.75)]",
              offset: "sm:ml-20", // ← さらに右へ
            },
            {
              href: "/blog",
              title: "DIARY",
              label: "ブログ / お知らせ",
              icon: "✶",
              color: "bg-slate-900/55 ring-fuchsia-400/70 text-slate-50",
              offset: "sm:ml-30", // ← 一番右へ
            },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`group relative block w-[330px] sm:w-[440px] ${item.offset}`}
            >
              <div
                className={`
                  flex items-center justify-between px-6 py-5 font-medium
                  backdrop-blur-sm ring-1 transition
                  group-hover:bg-slate-900/90 group-hover:ring-slate-300
                  ${item.color}
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

                <span className="ml-4 text-2xl transition group-hover:translate-x-0.5 group-hover:opacity-85">
                  {item.icon}
                </span>
              </div>
            </a>
          ))}
        </div>
      </nav>


      {/* 右側テキスト */}
      <section className="absolute inset-0 flex items-center justify-end px-6">
        <div className="ml-64 max-w-xl space-y-3 text-right drop-shadow-[0_3px_6px_rgba(0,0,0,0.85)]">
          <p className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-200">
            OTHERWORLDLY SHISHA LOUNGE
          </p>
          <h1 className="text-2xl font-semibold md:text-3xl leading-snug">
            異形頭のウェイターが迎える、<br className="hidden sm:inline" />
            少しだけピントのずれた夜。
          </h1>
          <p className="text-xs md:text-sm text-slate-100">
            半歩だけ現実とずれたシーシャラウンジ。
            このページから、メニュー・開店日・予約・ブログへ一歩でたどり着けるようにしています。
          </p>
        </div>
      </section>

      {/* 下のロゴバー */}
      <header className="absolute inset-x-0 bottom-4 flex justify-center px-4">
        <div className="flex w-full max-w-xl justify-between items-center rounded-full bg-slate-50/95 px-6 py-3 text-slate-900 shadow-xl">
          <div className="flex flex-col text-xs text-slate-600">
            <span className="uppercase tracking-[0.2em]">SHISHA LOUNGE</span>
            <span className="text-[0.65rem]">異世界感のある小さなラウンジ</span>
          </div>
          <div className="text-lg font-semibold tracking-widest">（店名ロゴ）</div>
        </div>
      </header>
    </main>
  );
}
