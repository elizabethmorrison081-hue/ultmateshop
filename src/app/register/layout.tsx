import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Join UltimateShop today to access the best Cvv and Dumps on the market. Quick and easy registration.",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
