'use client'
import React, { ReactNode, useState, Children, isValidElement } from 'react'
import styles from './Problem.module.css'

/** 放在 <Problem> 内部，包裹解答内容 */
export function Solution({ children }: { children: ReactNode }) {
  return <>{children}</>
}
Solution.displayName = '__MathSolution__'

interface ProblemProps {
  num?: string
  children: ReactNode
}

export function Problem({ num, children }: ProblemProps) {
  const [open, setOpen] = useState(false)

  const questionParts: ReactNode[] = []
  let solutionContent: ReactNode = null

  Children.forEach(children, (child) => {
    if (
      isValidElement(child) &&
      typeof child.type !== 'string' &&
      (child.type as { displayName?: string }).displayName === '__MathSolution__'
    ) {
      solutionContent = (child as React.ReactElement<{ children: ReactNode }>).props.children
    } else {
      questionParts.push(child)
    }
  })

  return (
    <div className={styles.prob}>
      <div className={styles.head}>
        {num && <span className={styles.num}>{num}</span>}
        <div className={styles.text}>{questionParts}</div>
      </div>

      {solutionContent && (
        <>
          <div className={styles.divider}>
            <span className={styles.line} />
            <button
              className={`${styles.arrow} ${open ? styles.arrowOpen : ''}`}
              onClick={() => setOpen(o => !o)}
              aria-label={open ? '折叠解析' : '展开解析'}
            >
              ▾
            </button>
          </div>
          <div className={`${styles.panel} ${open ? styles.panelOpen : ''}`}>
            <div className={styles.solution}>
              <span className={styles.solLabel}>解析</span>
              {solutionContent}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
