import { FC } from 'react'
import styles from './Button.module.css'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode
}

const Button: FC<Props> = ({ children, ...props }) => {
	return (
		<button className={styles.button} {...props}>
			{children}
		</button>
	)
}

export default Button
