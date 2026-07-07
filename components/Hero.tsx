import Link from 'next/link'
import styles from './Hero.module.css'

const features = [
  { icon: '📖', label: '概念讲解', desc: '用直觉和例子解释数学思想，拒绝死记硬背' },
  { icon: '🧮', label: '公式推导', desc: '完整的数学推导过程，知其然更知其所以然' },
  { icon: '🤖', label: 'AI 关联', desc: '每个概念都对应具体的 AI/ML 应用场景' },
  { icon: '💻', label: '代码实战', desc: 'Python/NumPy 实现，让数学跑起来' },
]

const path = ['微积分', '线性代数', '概率统计', '优化理论', 'AI数学专题']

export function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.badge}>AI 时代的数学指南</div>
        <h1 className={styles.title}>
          用数学读懂<br />人工智能
        </h1>
        <p className={styles.subtitle}>
          系统整理美国大学数学核心课程 · 专为 AI 时代重新设计学习路径
          <br />每一个公式，都告诉你它在神经网络里用在哪里
        </p>
        <Link href="/calculus" className={styles.cta}>
          开始学习 →
        </Link>
      </div>

      <div className={styles.features}>
        {features.map(f => (
          <div key={f.label} className={styles.featureItem}>
            <span className={styles.featureIcon}>{f.icon}</span>
            <span className={styles.featureLabel}>{f.label}</span>
            <span className={styles.featureDesc}>{f.desc}</span>
          </div>
        ))}
      </div>

      <hr className={styles.divider} />

      <div style={{ textAlign: 'center', marginBottom: 8 }}>
        <strong style={{ fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          建议学习路径
        </strong>
      </div>
      <div className={styles.path}>
        {path.map((step, i) => (
          <>
            <span key={step} className={styles.pathStep}>{step}</span>
            {i < path.length - 1 && <span key={`arrow-${i}`} className={styles.pathArrow}>→</span>}
          </>
        ))}
      </div>

      <hr className={styles.divider} />
    </>
  )
}
