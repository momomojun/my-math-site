import nextra from 'nextra'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  mdxOptions: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
})

export default withNextra({
  typescript: {
    ignoreBuildErrors: true,
  },
})
