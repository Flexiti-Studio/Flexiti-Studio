import type { PipelineStats } from '../types';

const ACTIVITY = [
  { color: 'bg-green-500', text: 'AI Analysis completed for the latest batch.', time: '2 mins ago' },
  { color: 'bg-blue-500',  text: 'Upload pipeline processed 8 new files.',      time: '14 mins ago' },
  { color: 'bg-amber-500', text: 'Storage at 42% of allocated 100 GB.',         time: '1 hour ago' },
];

interface Props { stats: PipelineStats; }

export default function AdminStatsSidebar({ stats }: Props) {
  const STAT_ROWS = [
    { icon: 'cloud_upload',     label: 'Uploaded',       value: stats.uploaded,  bg: 'bg-blue-50',   color: 'text-blue-600' },
    { icon: 'auto_awesome',     label: 'AI Analyzed',    value: stats.analyzed,  bg: 'bg-purple-50', color: 'text-purple-600' },
    { icon: 'hourglass_empty',  label: 'Pending Review', value: stats.pending,   bg: 'bg-yellow-50', color: 'text-yellow-600' },
    { icon: 'check_circle',     label: 'Published',      value: stats.published, bg: 'bg-green-50',  color: 'text-green-600' },
    { icon: 'error',            label: 'Failed',         value: stats.failed,    bg: 'bg-red-50',    color: 'text-red-600' },
  ];

  const total = stats.uploaded + stats.analyzed + stats.pending + stats.published + stats.failed || 1;
  const used  = Math.round((stats.published / total) * 100);

  return (
    <div className="col-span-12 lg:col-span-4 space-y-8">
      {/* Pipeline Health */}
      <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-slate-50">
        <h3 className="text-lg font-bold font-headline mb-6">Pipeline Health</h3>
        <div className="space-y-4">
          {STAT_ROWS.map((row) => (
            <div key={row.label} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg ${row.bg} ${row.color} flex items-center justify-center`}>
                  <span className="material-symbols-outlined text-xl">{row.icon}</span>
                </div>
                <span className="text-sm font-semibold">{row.label}</span>
              </div>
              <span className="text-sm font-bold tabular-nums">{row.value.toLocaleString()}</span>
            </div>
          ))}

          <div className="pt-6 border-t border-slate-100">
            <div className="flex justify-between items-end mb-2">
              <span className="text-[10px] font-extrabold text-outline uppercase tracking-wider">Published Rate</span>
              <span className="text-xs font-bold">{used}%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full transition-all duration-500"
                style={{ width: `${used}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Feed */}
      <div className="bg-surface-container-low p-6 rounded-2xl">
        <h3 className="text-sm font-bold uppercase tracking-wider text-outline mb-4">Real-time Feed</h3>
        <div className="space-y-4">
          {ACTIVITY.map((a, i) => (
            <div key={i} className="flex gap-3">
              <div className={`w-2 h-2 rounded-full ${a.color} mt-1.5 shrink-0`}></div>
              <p className="text-xs">
                {a.text}
                <span className="block text-outline mt-1">{a.time}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Help card */}
      <div className="bg-primary text-on-primary p-6 rounded-2xl relative overflow-hidden group">
        <div className="relative z-10">
          <h4 className="font-bold mb-2 font-headline">Need help with AI tagging?</h4>
          <p className="text-xs opacity-90 mb-4 leading-relaxed">
            Check out our guide on how to optimize prompts for better meme categorization and viral potential.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-colors"
          >
            Read Guide <span className="material-symbols-outlined text-sm">open_in_new</span>
          </a>
        </div>
        <span className="material-symbols-outlined absolute -bottom-6 -right-6 text-9xl opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-500">
          auto_fix_high
        </span>
      </div>
    </div>
  );
}
