// Mapa simples desenhado com SVG
const Mapa = ({ children }) => {
  return (
    <svg viewBox="0 0 300 165" className="w-full rounded-lg border border-borda bg-verde-claro" role="img" aria-label="Mapa">
      <rect x="0" y="38" width="300" height="16" fill="var(--color-creme)" />
      <rect x="78" y="0" width="18" height="165" fill="var(--color-creme)" />
      <rect x="200" y="0" width="16" height="165" fill="var(--color-creme)" />
      <rect x="0" y="112" width="300" height="12" fill="var(--color-creme)" />
      <path d="M0 96 Q150 70 300 98" stroke="var(--color-creme)" strokeWidth="12" fill="none" />
      {children}
    </svg>
  )
}

export default Mapa