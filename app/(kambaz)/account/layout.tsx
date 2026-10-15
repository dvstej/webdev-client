
import type { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function AccountLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="hidden w-[100px] shrink-0 md:block">
        <AccountNavigation />
      </div>

      <div className="min-w-0 flex-1">
        {children}
      </div>
    </div>
  );
}
