/**
 * メニューボタンコンポーネント
 * 
 * 目的:
 * - 左側のナビゲーションボタンを表示
 * - 平行四辺形デザインとホバーエフェクトを実装
 * - クリック時に対応するコンテンツを表示させる
 */
import { MenuButtonItem } from "../types";

interface MenuButtonProps {
  item: MenuButtonItem;
  onClick: () => void;
}

export default function MenuButton({ item, onClick }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative block w-82.5 sm:w-110 ${item.offset} cursor-pointer text-left z-10 transition-all hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]`}
    >
      <div
        className={`
          flex items-center justify-between px-6 py-5 font-medium fantasy-font
          backdrop-blur-sm ring-1 transition-all
          group-hover:bg-emerald-900/30
          ${item.color}
          ${item.glowClass}
        `}
        style={{
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
  );
}
