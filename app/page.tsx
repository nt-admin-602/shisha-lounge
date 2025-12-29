export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <section>
          <h1 className="text-3xl font-bold">Shisha Lounge（仮）</h1>
          <p className="text-slate-300">
            ゆっくりくつろげる横浜の小さなシーシャ屋です。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">アクセス</h2>
          <p className="text-slate-400">
            横浜駅から徒歩○分。地図は後で表示します。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">営業日</h2>
          <p className="text-slate-400">
            今月の営業カレンダーは後でここに表示します。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">席の予約</h2>
          <a
            href="/reserve"
            className="inline-block mt-2 rounded bg-emerald-400 px-3 py-2 text-slate-900 font-medium"
          >
            予約フォームへ
          </a>
        </section>
      </div>
    </main>
  );
}
