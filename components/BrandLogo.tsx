import Link from "next/link";

export function BrandLogo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className={`brand-logo ${inverse ? "brand-logo--inverse" : ""}`} aria-label="Akai Elevator System home">
      <span className="brand-word">Akai Elevator System</span>
    </Link>
  );
}
