
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const pathname = usePathname();

  const links = [
    { name: "Signin", href: "/account/signin" },
    { name: "Signup", href: "/account/signup" },
    { name: "Profile", href: "/account/profile" },
  ];

  return (
    <div
      id="wd-account-navigation"
      className="flex w-[100px] flex-col gap-1"
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={
            pathname === link.href
              ? "border-l-[3px] border-black bg-white px-3 py-2 font-semibold text-black no-underline"
              : "border-l-[3px] border-transparent px-3 py-2 text-red-600 no-underline"
          }
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
