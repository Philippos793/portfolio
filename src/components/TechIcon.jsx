// Renders a logo from simple-icons ({ path, hex }).
// color: optional. 'currentColor' for logos that are too dark on a dark background
function TechIcon({ icon, color, className }) {
  if (!icon) return null

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={color ?? `#${icon.hex}`}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  )
}

export default TechIcon
