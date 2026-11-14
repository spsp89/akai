import Link from "next/link";

export function BrandLogo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className={`brand-logo ${inverse ? "brand-logo--inverse" : ""}`} aria-label="AKAI Elevators home">
      <span className="brand-symbol" aria-hidden="true"><i>↑</i><i>↓</i></span>
      <span className="brand-word">AKAI<small>ELEVATOR SYSTEM</small></span>
    </Link>
  );
}
