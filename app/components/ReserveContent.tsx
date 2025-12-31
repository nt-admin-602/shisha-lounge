interface ReserveContentProps {
  onClose: () => void;
}

export default function ReserveContent({ onClose }: ReserveContentProps) {
  return (
    <div className="ml-64 max-w-xl space-y-3 text-right drop-shadow-[0_3px_6px_rgba(0,0,0,0.85)] bg-slate-900/80 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">SEAT RESERVATION</h2>
      <div className="space-y-4 text-left">
        <div>
          <label className="block text-sm font-semibold mb-1">お名前</label>
          <input type="text" className="w-full bg-slate-800 p-2 rounded" placeholder="山田太郎" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">電話番号</label>
          <input type="tel" className="w-full bg-slate-800 p-2 rounded" placeholder="090-1234-5678" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">希望日時</label>
          <input type="datetime-local" className="w-full bg-slate-800 p-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">人数</label>
          <select className="w-full bg-slate-800 p-2 rounded">
            <option>1名</option>
            <option>2名</option>
            <option>3名</option>
            <option>4名</option>
            <option>5名以上</option>
          </select>
        </div>
        <button className="w-full px-4 py-2 bg-emerald-700 rounded hover:bg-emerald-600">
          予約する
        </button>
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
