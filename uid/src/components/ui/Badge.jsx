export default function Badge({ children, color = '#4D1979', className = '' }) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${className}`}
      style={{ backgroundColor: color + '18', color }}
    >
      {children}
    </span>
  )
}
