export default function Fixtures() {
    return (
        <div className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="text-2xl font-bold">Fixtures</h2>
            <p className="text-white/70">Full fixture list and results.</p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
                <table className="min-w-full divide-y divide-white/10">
                    <thead className="bg-neutral-900/60">
                        {/* You might want to replace 'a' with actual <tr><th>...</th></tr> */}
                        
                    </thead>
                    <tbody className="bg-neutral-900/30 divide-y divide-white/10">
                        <tr className="hover:bg-white/5">
                            <td className="px-4 py-4">Sun 06 Sep 2025</td>
                            <td className="px-4 py-4">Farringdon U12 vs Wearside FC U12</td>
                            <td className="px-4 py-4">Farringdon Community Hub</td>
                            <td className="px-4 py-4 text-right">09:00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}