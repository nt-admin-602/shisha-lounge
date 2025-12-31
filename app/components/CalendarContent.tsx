interface CalendarContentProps {
  onClose: () => void;
}

export default function CalendarContent({ onClose }: CalendarContentProps) {
  return (
    <div className="ml-64 max-w-xl space-y-3 text-right drop-shadow-[0_3px_6px_rgba(0,0,0,0.85)] bg-slate-900/80 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">OPEN DAYS CALENDAR</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-7 gap-2 text-center text-sm">
          <div className="font-semibold">日</div>
          <div className="font-semibold">月</div>
          <div className="font-semibold">火</div>
          <div className="font-semibold">水</div>
          <div className="font-semibold">木</div>
          <div className="font-semibold">金</div>
          <div className="font-semibold">土</div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((day) => (
            <div key={day} className={`p-2 rounded ${day % 7 === 0 || day % 7 === 1 ? 'bg-emerald-700/50' : 'bg-slate-700/50'}`}>
              {day}
            </div>
          ))}
        </div>
        <p className="text-xs text-emerald-300">※緑色の日は営業日です</p>
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
