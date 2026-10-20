import type { ButtonHTMLAttributes } from 'react'
import './Button.css'

// Every normal button prop (type, onClick, aria-pressed…) plus the Figma variant
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

function Button({ variant = 'primary', type = 'button', className, ...rest }: ButtonProps) {
  const classes = `button button--${variant}${className ? ` ${className}` : ''}`

  return <button type={type} className={classes} {...rest} />
}

export default Button
