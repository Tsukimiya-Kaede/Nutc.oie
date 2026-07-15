import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "青年 AI 實戰養成班｜1 班學習入口",
  description: "查詢個人出席狀態，瀏覽教師課堂問題回覆。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
