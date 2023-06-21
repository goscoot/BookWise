"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function Navigation({
  navLinks,
}: {
  navLinks: {
    href: string;
    name: string;
  }[];
}) {
  const pathname = usePathname();

  return (
    <ul>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <li key={link.name} className="pt-10">
            <Link
              className={`text-2xl ${
                isActive ? "text-gray-light font-semibold" : "text-gray"
              }`}
              href={link.href}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
