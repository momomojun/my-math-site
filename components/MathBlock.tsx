import React, { ReactNode } from 'react'
import styles from './MathBlock.module.css'

type BlockType = 'def' | 'theorem' | 'corollary' | 'proposition' | 'remark'

const LABELS: Record<BlockType, string> = {
  def: '定义',
  theorem: '定理',
  corollary: '推论',
  proposition: '命题',
  remark: '注',
}

interface MathBlockProps {
  type: BlockType
  num?: string | number
  title?: string
  children: ReactNode
}

export function MathBlock({ type, num, title, children }: MathBlockProps) {
  const label = LABELS[type] ?? '定义'
  return (
    <div className={`${styles.block} ${styles[type] ?? styles.def}`}>
      <div className={styles.head}>
        <span className={styles.label}>
          {label}{num !== undefined && num !== '' ? ` ${num}` : ''}
        </span>
        {title && <span className={styles.title}>{title}</span>}
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  )
}

type ShortProps = Omit<MathBlockProps, 'type'>
export const Def  = (p: ShortProps) => <MathBlock type="def"         {...p} />
export const Thm  = (p: ShortProps) => <MathBlock type="theorem"     {...p} />
export const Cor  = (p: ShortProps) => <MathBlock type="corollary"   {...p} />
export const Prop = (p: ShortProps) => <MathBlock type="proposition" {...p} />
export const Rmk  = (p: ShortProps) => <MathBlock type="remark"      {...p} />
