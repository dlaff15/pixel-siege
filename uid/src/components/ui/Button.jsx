export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  onClick,
  ...props
}) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tcu-purple disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:   'bg-tcu-purple text-white hover:bg-tcu-purple-dark active:scale-[0.98]',
    secondary: 'bg-tcu-purple-pale text-tcu-purple border border-tcu-purple/20 hover:bg-purple-100 active:scale-[0.98]',
    ghost:     'bg-transparent text-tcu-purple hover:bg-tcu-purple-pale active:scale-[0.98]',
    danger:    'bg-red-600 text-white hover:bg-red-700 active:scale-[0.98]',
    outline:   'bg-white text-tcu-purple border-2 border-tcu-purple hover:bg-tcu-purple-pale active:scale-[0.98]',
  }

  const sizes = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-sm px-5 py-2.5',
    lg: 'text-base px-6 py-3',
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
