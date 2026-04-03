export default function Input({
  label,
  error,
  className = '',
  id,
  ...props
}) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId} className="text-sm font-semibold text-gray-700">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors
          ${error
            ? 'border-red-400 focus:border-red-500 focus:ring-red-200'
            : 'border-gray-200 focus:border-tcu-purple focus:ring-tcu-purple/20'
          }
          focus:outline-none focus:ring-2 bg-white placeholder:text-gray-400 ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  )
}
