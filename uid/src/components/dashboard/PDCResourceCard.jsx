export default function PDCResourceCard({ resource }) {
  if (!resource) return null
  return (
    <div className="mt-3 bg-tcu-purple-50 border border-tcu-purple/15 rounded-xl p-3.5 flex gap-3">
      <span className="text-lg flex-shrink-0 mt-0.5">{resource.icon}</span>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-bold text-tcu-purple">{resource.name}</p>
        <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{resource.description}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 bg-tcu-purple text-white text-xs font-semibold px-3 py-1 rounded-full">
            {resource.actionLabel}
          </span>
          {resource.note && (
            <span className="text-xs text-gray-400 italic hidden sm:inline">{resource.note}</span>
          )}
        </div>
      </div>
    </div>
  )
}
