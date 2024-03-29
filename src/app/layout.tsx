import type { Metadata } from "next";
import StyledComponentsRegistry from "@/styles/registry";
import DefaultTemplate from "@/components/template/Default";

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <DefaultTemplate>{children}</DefaultTemplate>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
