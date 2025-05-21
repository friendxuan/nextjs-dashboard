import '@/app/ui/global.css'; // 全局样式 Tailwind
import { inter } from '@/app/ui/fonts'; // 添加主字体
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}