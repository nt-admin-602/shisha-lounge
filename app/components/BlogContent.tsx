interface BlogContentProps {
  onClose: () => void;
}

export default function BlogContent({ onClose }: BlogContentProps) {
  return (
    <div className="ml-64 max-w-xl space-y-3 text-right drop-shadow-[0_3px_6px_rgba(0,0,0,0.85)] bg-slate-900/80 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">DIARY / NEWS</h2>
      <div className="space-y-4 text-left">
        <div className="border-b border-slate-700 pb-3">
          <p className="text-xs text-slate-400">2025/12/30</p>
          <h3 className="text-lg font-semibold">新しいフレーバー入荷</h3>
          <p className="text-sm">人気のミックスベリーフレーバーが再入荷しました。</p>
        </div>
        <div className="border-b border-slate-700 pb-3">
          <p className="text-xs text-slate-400">2025/12/25</p>
          <h3 className="text-lg font-semibold">年末年始の営業について</h3>
          <p className="text-sm">12/31-1/3は休業いたします。</p>
        </div>
        <div className="border-b border-slate-700 pb-3">
          <p className="text-xs text-slate-400">2025/12/20</p>
          <h3 className="text-lg font-semibold">新メニュー追加</h3>
          <p className="text-sm">冬限定のホットドリンクメニューを追加しました。</p>
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
