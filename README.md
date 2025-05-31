## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.


✅ 方案一：禁用 Turbopack（使用 Webpack）
这是最稳定的临时解决方案：

json
// package.json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build"
  }
}
移除 --turbopack 参数后，Next.js 将回退到 Webpack 构建系统，字体加载和 CSS 处理将恢复正常。

