import { Trash } from 'lucide-react'

import styles from './TrashButton.module.css'
import { ButtonHTMLAttributes } from 'react'

export function TrashButton({
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div>
      <button className={styles.trashButton} {...rest}>
        <Trash size={16} />
      </button>
    </div>
  )
}
