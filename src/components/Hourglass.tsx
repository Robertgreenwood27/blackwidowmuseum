/** The museum's mark: the ventral hourglass, drawn as two facing triangles. */
export function Hourglass({ size = 14, className }: { size?: number; className?: string }) {
  return (
    <svg width={size * 0.62} height={size} viewBox="0 0 62 100" className={className} aria-hidden="true">
      <path d="M2 0 L60 0 L35 46 L27 46 Z M27 54 L35 54 L60 100 L2 100 Z" fill="var(--signal)" />
    </svg>
  );
}
