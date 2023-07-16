import { Check, Circle } from 'lucide-react'

import styles from './CheckButton.module.css'
import { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean
}

export function CheckButton({ checked = false, ...rest }: Props) {
  return (
    <div>
      <button
        {...rest}
        className={`${styles.button} ${
          checked ? styles.checked : styles.unchecked
        }`}
      >
        <div className={styles.bg}>
          {checked && (
            <Check className={styles.checked} size={16} color="#fff" />
          )}
        </div>
      </button>
    </div>
  )
}
