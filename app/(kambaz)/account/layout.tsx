import { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function AccountLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div id="wd-kambaz-account">
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <AccountNavigation />
            </td>

            <td valign="top" id="wd-account-screen">
              {children}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}