import Link from "next/link";

export function BrandLogo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className={`brand-logo ${inverse ? "brand-logo--inverse" : ""}`} aria-label="Akai Elevator Systems home">
      <span className="brand-word">Akai Elevator Systems</span>
    </Link>
  );
}
