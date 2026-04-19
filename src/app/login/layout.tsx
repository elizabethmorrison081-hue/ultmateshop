import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Log in to your UltimateShop account to access premium features and secure shopping.",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
