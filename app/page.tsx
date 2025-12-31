"use client";
import Image from "next/image";
import { useState } from "react";
import { ViewType } from "./types";
import { MENU_ITEMS } from "./constants/menuItems";
import MenuButton from "./components/MenuButton";
import WelcomeText from "./components/WelcomeText";
import MenuContent from "./components/MenuContent";
import CalendarContent from "./components/CalendarContent";
import BlogContent from "./components/BlogContent";
import ReserveContent from "./components/ReserveContent";

export default function Home() {
  const [view, setView] = useState<ViewType>(null);

  const handleMenuClick = (href: string) => {
    const viewMap: Record<string, ViewType> = {
      "/menu": "menu",
      "/calendar": "calendar",
      "/blog": "blog",
      "/reserve": "reserve",
    };
    setView(viewMap[href] || null);
  };

  const renderContent = () => {
    if (view === null) return <WelcomeText />;
    if (view === "menu") return <MenuContent onClose={() => setView(null)} />;
    if (view === "calendar") return <CalendarContent onClose={() => setView(null)} />;
    if (view === "blog") return <BlogContent onClose={() => setView(null)} />;
    if (view === "reserve") return <ReserveContent onClose={() => setView(null)} />;
    return null;
  };

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

      {/* ナビゲーションメニュー */}
      <nav className="absolute inset-y-0 left-0 flex items-start pt-20 pl-8 sm:pl-14">
        <div className="flex flex-col gap-8">
          {MENU_ITEMS.map((item) => (
            <MenuButton
              key={item.href}
              item={item}
              onClick={() => handleMenuClick(item.href)}
            />
          ))}
        </div>
      </nav>


      {/* コンテンツ表示エリア */}
      <section className="absolute inset-0 flex items-center justify-end px-6 pointer-events-none z-20">
        <div className="pointer-events-auto">
          {renderContent()}
        </div>
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


    </main>
  );
}
