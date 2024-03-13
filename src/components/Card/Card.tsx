// Card.tsx
import React from 'react'

import styles from './Card.module.css'

type CardProps = {
  children: React.ReactNode
  className?: string
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>
}

export const CardHeader: React.FC<CardProps> = ({ children }) => {
  return <div className={styles.header}>{children}</div>
}

export const CardBody: React.FC<CardProps> = ({ children }) => {
  return <div className={styles.body}>{children}</div>
}

export const CardFooter: React.FC<CardProps> = ({ children }) => {
  return <div className={styles.footer}>{children}</div>
}
