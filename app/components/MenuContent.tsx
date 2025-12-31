interface MenuContentProps {
  onClose: () => void;
}

export default function MenuContent({ onClose }: MenuContentProps) {
  return (
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
        onClick={onClose}
        className="mt-4 px-4 py-2 bg-slate-700 rounded hover:bg-emerald-900/30 hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all"
      >
        閉じる
      </button>
    </div>
  );
}
