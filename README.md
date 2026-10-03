# 📐 知识博士 · AI 时代的数学学习指南

面向中文读者的大学数学学习站：讲义、例题和习题放在一起，并说明每块数学在机器学习里用在哪里。

站点分成两个专区：

| 专区 | 内容 |
| --- | --- |
| 🇨🇳 国内专区 | 高等数学（第 1–12 章）、高等代数 |
| 🌍 留学生专区 | 微积分、线性代数、概率与统计、离散数学、优化理论、AI 数学专题（矩阵微积分、信息论） |

## 技术栈

- [Next.js](https://nextjs.org/) + [Nextra](https://nextra.site/) 文档主题，内容用 MDX 编写
- 自定义组件：`MathBlock`（公式块）、`Problem`（例题 / 习题，可折叠解析）、`Hero`（首页头图）

## 本地运行

```bash
npm install
npm run dev
```

打开 <http://localhost:3000>。

## 目录结构

```
pages/
  _meta.ts            侧边栏导航（两个专区）
  index.mdx           首页 / 课程地图
  higher-math/        高等数学
  advanced-algebra/   高等代数
  calculus/ linear-algebra/ probability/ discrete-math/ optimization/ ai-math/
components/           MathBlock、Problem、Hero 等组件
theme.config.tsx      站点标题、页脚、主题设置
```

新增一章：在对应目录下加一个 `.mdx` 文件，再在该目录的 `_meta.ts` 里登记标题。

## 许可

基于 [nextra-docs-template](https://github.com/shuding/nextra-docs-template)，MIT 协议，见 [LICENSE](LICENSE)。
