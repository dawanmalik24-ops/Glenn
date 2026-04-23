const stats = [
  { label: 'Clients Transformed', value: '500+' },
  { label: 'Sessions Completed', value: '10k+' },
  { label: 'ACE Certified', value: 'Expert' },
  { label: 'PCM Location', value: 'Leader' },
]

export default function SocialProofBar() {
  return (
    <div className="bg-gold py-8 border-y border-black/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-black font-display text-3xl md:text-4xl font-extrabold leading-none mb-1">
                {stat.value}
              </p>
              <p className="text-black/70 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
