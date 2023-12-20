import { getClsNames } from '@/utils/getClsNames'
import { HTMLAttributes } from 'react'
import s from './index.module.css'

interface Props extends HTMLAttributes<HTMLButtonElement> {
	label: string
	disabled?: boolean
}

export function Button({ label, className, disabled, ...props }: Props) {
	return (
		<button className={getClsNames(s.button, [className])} disabled={disabled} {...props}>
			{label}
		</button>
	)
}
