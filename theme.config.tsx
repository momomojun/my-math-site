import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>
      📐 知识博士
    </span>
  ),
  project: {
    link: 'https://github.com/momomojun/my-math-site',
  },
  docsRepositoryBase: 'https://github.com/momomojun/my-math-site',
  footer: {
    text: (
      <span>
        © {new Date().getFullYear()} 知识博士 · AI时代的数学学习指南
      </span>
    ),
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="AI时代的美国大学数学学习指南" />
    </>
  ),
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    backToTop: true,
  },
}

export default config
