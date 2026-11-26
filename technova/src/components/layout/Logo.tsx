import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/brand/technova-logo.png";
import logoLight from "../../../public/brand/technova-logo-claro.png";

export function Logo({ variant = "default", className = "", priority = false }: { variant?: "default" | "light"; className?: string; priority?: boolean }) {
  return (
    <Link href="/" aria-label="TECHNOVA — página inicial" className={`inline-flex shrink-0 items-center ${className}`}>
      <Image
        src={variant === "light" ? logoLight : logo}
        alt="TECHNOVA"
        priority={priority}
        sizes="(max-width: 640px) 150px, 200px"
        className="h-auto w-[148px] sm:w-[188px]"
      />
    </Link>
  );
}
