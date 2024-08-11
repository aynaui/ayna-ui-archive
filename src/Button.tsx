import { FC } from 'react'
import styles from './Button.module.css'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode
}

const Button: FC<Props> = ({ children }) => {
	return <div className={styles.button}>{children}</div>
}

export default Button
