export default function ProgressBar({ percent, className = '', color = '#4D1979', height = 6, showLabel = false }) {
  const clamped = Math.min(100, Math.max(0, percent))
  return (
    <div className={`w-full ${className}`}>
      <div
        className="w-full rounded-full bg-gray-100 overflow-hidden"
        style={{ height }}
      >
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${clamped}%`, backgroundColor: color }}
        />
      </div>
      {showLabel && (
        <span className="text-xs text-gray-500 mt-1">{clamped}% complete</span>
      )}
    </div>
  )
}
