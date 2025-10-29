import { clsx } from 'clsx'

export function Gradient({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] sm:bg-linear-145',
      )}
    />
  )
}

export function GradientBackground() {
  return (
    <div className="absolute mx-auto overflow-x-hidden h-screen w-screen">
      <div className="relative max-w-7xl mx-auto">
        <div
          className={clsx(
            'absolute -top-44 -right-60 h-60 w-xl transform-gpu md:right-0',
            'bg-linear-115 from-[#ff80b5] from-50% via-[#9089fc] via-70% to-[#b060ff] opacity-50',
            'rotate-[-10deg] rounded-full blur-3xl',
          )}
        />
      </div>
    </div>
  )
}
