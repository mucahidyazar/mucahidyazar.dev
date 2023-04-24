'use client'

import {cva, VariantProps} from 'class-variance-authority'
import clsx from 'clsx'
import {ButtonHTMLAttributes, forwardRef} from 'react'

const buttonVariants = cva('text-orange-400', {
  variants: {
    variant: {
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    variant: 'bold',
  },
})

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, variant, label}, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(buttonVariants({variant, className}))}
        aria-label="Subscribe to the newsletter"
      >
        {label ?? 'Subscribe'}
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
