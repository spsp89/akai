import Link from "next/link";

export function ConversionDock() {
  return <aside className="conversion-dock" aria-label="Quick project actions">
    <span><b>Planning a lift?</b><small>Get the right recommendation in 3 steps.</small></span>
    <a href="tel:+919447629724">Call now</a>
    <Link href="/#project-planner">Plan my project <i>↗</i></Link>
  </aside>;
}
